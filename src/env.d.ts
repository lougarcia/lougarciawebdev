interface RuntimeEnv {
  CONTACT_FORM: KVNamespace;
}

declare namespace App {
  interface Locals {
    runtime: {
      env: RuntimeEnv;
    };
  }
}