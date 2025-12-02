import jwt from 'jsonwebtoken';

interface TokenPayload {
  userId: number;
  username: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const generateTokens = (user: { id: number; username: string }): Tokens => {
  const payload = { userId: user.id, username: user.username };
  const jwtSecret = process.env.JWT_SECRET || 'default-secret';
  const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || 'default-refresh-secret';
  
  const accessToken = jwt.sign(payload, jwtSecret, { 
    expiresIn: '7d' 
  });

  const refreshToken = jwt.sign({ userId: user.id }, jwtRefreshSecret, { 
    expiresIn: '30d' 
  });

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'default-secret') as TokenPayload;
  } catch (error) {
    return null;
  }
};

export const verifyRefreshToken = (token: string): { userId: number } | null => {
  try {
    return jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET || 'default-refresh-secret'
    ) as { userId: number };
  } catch (error) {
    return null;
  }
};
