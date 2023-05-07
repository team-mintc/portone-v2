import axios from 'axios';
import {AuthResponse, RefreshParam, SignInParam} from 'types/Auth';

/**
 * API Key 방식으로 로그인
 */
export const signIn = async ({api_key}: SignInParam) => {
  const response = await axios({
    url: 'https://api.portone.io/v2/signin/api-key',
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {api_key},
  });
  return response.data as AuthResponse;
};

/**
 * 토큰 재발급
 */
export const refreshToken = async ({refresh_token}: RefreshParam) => {
  const response = await axios({
    url: 'https://api.portone.io/v2/token-regeneration',
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {refresh_token},
  });
  return response.data as AuthResponse;
};

export default {
  signIn,
  refreshToken,
};
