type LocalStorageKey = "login-username" | "login-password" | "locally-stored-profiles";

export class LocalStorageHandler {
  constructor() {
    throw new Error("LocalStorageHandler cannot be instantiated");
  }

  public static get_local_storage_item<Type>(key: LocalStorageKey): Type | undefined {
    let json_data: string | null = localStorage.getItem(key);
    if (json_data === null) {
      return undefined;
    } else {
      try {
        let data: Type = JSON.parse(json_data);
        return data;
      } catch {
        return undefined;
      }
    }
  }

  public static set_local_storage_item(key: LocalStorageKey, data: any) {
    let json_string: string = JSON.stringify(data);
    localStorage.setItem(key, json_string);
  }
}
