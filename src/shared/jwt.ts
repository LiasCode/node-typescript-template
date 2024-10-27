import jwt from "jsonwebtoken";

export async function createJWTToken(data: any, secret: string, expiresTime: string): Promise<string | null> {
  try {
    const jwtToken = jwt.sign(data, secret, {
      algorithm: "HS512",
      expiresIn: expiresTime,
    });
    return jwtToken;
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
