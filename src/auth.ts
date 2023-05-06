import axios from 'axios';
import {AuthResponse} from 'types/Auth';

export const signIn = async (api_key: string) => {
  const response = await axios({
    url: 'https://api.portone.io/v2/signin/api-key',
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {api_key},
  });
  return response.data as AuthResponse;
};

export const refreshToken = async (refresh_token: string) => {
  const response = await axios({
    url: 'https://api.portone.io/v2/token-regeneration',
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {refresh_token},
  });
  return response.data as AuthResponse;
};
