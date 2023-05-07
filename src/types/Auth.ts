export interface SignInParam {
  /**
   * 사용자의 API Key
   */
  api_key: string;
}

export interface RefreshParam {
  /**
   * 새로운 token을 발급받기 위한 refresh token
   */
  refresh_token: string;
}

export interface AuthResponse {
  /**
   * 인증 서버에서 인증된 사용자의 access token
   */
  access_token: string;
  /**
   * 새로운 token을 발급받기 위한 refresh token
   */
  refresh_token: string;
}

export type Token = AuthResponse;
