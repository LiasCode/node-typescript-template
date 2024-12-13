import jwt from "jsonwebtoken";

export async function createJWTToken(payload: any, secret: string, expiresTime: string): Promise<string | null> {
  try {
    return jwt.sign(payload, secret, {
      algorithm: "HS512",
      expiresIn: expiresTime,
    });
  } catch (error: any) {
    return null;
  }
}

export async function validateJWTToken(token: string, secret: string): Promise<jwt.JwtPayload | string | null> {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
