export const signInErrorMessages = Object.freeze({
  // Email errors
  EMAIL_MISSING: 'Email is required.',
  EMAIL_INVALID: 'Invalid Email.',

  // Username errors
  USERNAME_MISSING: 'Username is required.',
  USERNAME_TOO_SHORT: 'Username is too short, must be mayor than 5 characters.',
  USERNAME_TOO_LONG: 'Username is too long, must be lesser than 10 characters.',

  // Password errors
  PASSWORD_MISSING: 'Password is required.',
  PASSWORD_TOO_SHORT: 'Password is too short, must be mayor than 8 characters.',
  PASSWORD_TOO_LONG: 'Password is too long, must be lesser than 32 characters.',
  PASSWORD_TOO_WEAK: 'Password is too weak.',

  // Repeat Password errors
  REPEAT_PASSWORD_MISSING: 'Repeat Password is required.',
  REPEAT_PASSWORD_TOO_SHORT:
    'Repeat Password is too short, must be mayor than 8 characters.',
  REPEAT_PASSWORD_TOO_LONG:
    'Repeat Password is too long, must be lesser than 32 characters.',

  // Same Password errors
  UNMATCHING_PASSWORDS: 'Password must match.'
});
