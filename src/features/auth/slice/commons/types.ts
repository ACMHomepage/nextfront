interface UserData {
  id: number;
  nickname: string;
  email: string;
  isAdmin: boolean;
}

interface StateLoggedWithInfo {
  logged: true;
  withInfo: true;
  data: UserData;
}

interface StateLoggedWithoutInfo {
  logged: true;
  withInfo: false;
}

interface StateUnlogged {
  logged: false;
  withInfo: false;
}

/**
 * State graph:
 * 1. Unlogged (default):
 *    - Logged success -> (2) LoggedWithInfo
 * 2. LoggedWithInfo:
 *    - Exit from the browser, lost user data -> (3) LoggedWithoutInfo
 * 3. LoggedWithoutInfo:
 *    - Try to get user data, and success -> (2) LoggedWithInfo
 *    - fail -> (1) Unlogged
 */
type State =
  | StateLoggedWithInfo
  | StateLoggedWithoutInfo
  | StateUnlogged;

export type { UserData, State };