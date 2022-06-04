export class Account {
  email?: string;
  username?: string;
  role?: string;
  active?: boolean;
  avatarPath?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({
    email,
    username,
    role,
    active,
    avatarPath,
    createdAt,
    updatedAt,
  }: {
    email?: string;
    username?: string;
    role?: string;
    active?: boolean;
    avatarPath?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.email = email;
    this.username = username;
    this.role = role;
    this.active = active;
    this.avatarPath = avatarPath;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
