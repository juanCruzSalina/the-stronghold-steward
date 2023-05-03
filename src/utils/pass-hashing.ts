import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export const hashPass = async (password: string) => {
  const salt = await bcrypt.genSalt(saltOrRounds);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};
