interface StoreKeyType {
  readonly logged: string;
}

const SLICE_NAME = 'auth';
const STORE_KEY: StoreKeyType = {
  logged: `STORE_KEY_${SLICE_NAME}_isLogged`,
}

export { SLICE_NAME, STORE_KEY };