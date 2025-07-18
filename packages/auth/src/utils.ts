import { authInstance } from ".";

let _schema: ReturnType<typeof authInstance.api.generateOpenAPISchema>;
const getSchema = async () =>
  (_schema ??= authInstance.api.generateOpenAPISchema());

export const authOpenAPIDocs = {
  getPaths: (prefix = "v1/auth") =>
    getSchema().then(({ paths }) => {
      const reference: typeof paths = Object.create(null);

      for (const path of Object.keys(paths)) {
        const key = prefix + path;
        const pathObj = paths[path];
        if (!pathObj) continue;
        reference[key] = pathObj;

        for (const method of Object.keys(pathObj)) {
          const operation = (reference[key] as any)[method];

          operation.tags = ["Authentication"];
        }
      }

      return reference;
    }) as Promise<any>,
  components: getSchema().then(({ components }) => components) as Promise<any>,
} as const;
