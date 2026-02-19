import { add_user_tests_interface } from "./add-user.interface";

export let add_user_tests: add_user_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      google_id: 'google_user_123',
      apple_id: 'apple_user_456',
      microsoft_id: 'microsoft_user_789',
      facebook_id: 'facebook_user_abc',
      profile_picture: 'https://example.com/profile.jpg'
    },
    check_output: (input, output) => {
      // Verify that password is not stored in plain text
      if (output.data && output.data.password) {
        if (output.data.password === input.password) {
          throw new Error('Password should be encrypted, not stored in plain text');
        }
        // Verify that password is a bcrypt hash (should start with $2b$)
        if (!output.data.password.startsWith('$2b$')) {
          throw new Error('Password should be a bcrypt hash');
        }
      }
      // Verify all fields are saved correctly
      if (output.data) {
        if (output.data.name !== input.name) throw new Error('Name not saved correctly');
        if (output.data.email !== input.email) throw new Error('Email not saved correctly');
        if (output.data.google_id !== input.google_id) throw new Error('Google ID not saved correctly');
        if (output.data.apple_id !== input.apple_id) throw new Error('Apple ID not saved correctly');
        if (output.data.microsoft_id !== input.microsoft_id) throw new Error('Microsoft ID not saved correctly');
        if (output.data.facebook_id !== input.facebook_id) throw new Error('Facebook ID not saved correctly');
        if (output.data.profile_picture !== input.profile_picture) throw new Error('Profile picture not saved correctly');
      }
    },
  },
  {
    name: 'Without Optional Fields',
    input: {
      name: 'Jane Doe',
      password: 'mypassword'
    },
    check_output: (input, output) => {
      // Verify that password is encrypted even when optional fields are not provided
      if (output.data && output.data.password) {
        if (output.data.password === input.password) {
          throw new Error('Password should be encrypted');
        }
        if (!output.data.password.startsWith('$2b$')) {
          throw new Error('Password should be a bcrypt hash');
        }
      }
      // Verify that optional fields are null when not provided
      if (output.data) {
        if (output.data.google_id !== null) throw new Error('Google ID should be null when not provided');
        if (output.data.apple_id !== null) throw new Error('Apple ID should be null when not provided');
        if (output.data.microsoft_id !== null) throw new Error('Microsoft ID should be null when not provided');
        if (output.data.facebook_id !== null) throw new Error('Facebook ID should be null when not provided');
        if (output.data.profile_picture !== null) throw new Error('Profile picture should be null when not provided');
      }
    },
  },
  {
    name: 'With OAuth Only',
    input: {
      name: 'OAuth User',
      google_id: 'oauth_google_123',
      profile_picture: 'https://example.com/oauth_profile.jpg',
      password: 'oauth_password' // Password is required, but can be a placeholder for OAuth users
    },
    check_output: (input, output) => {
      // Verify OAuth fields are saved correctly
      if (output.data) {
        if (output.data.google_id !== input.google_id) throw new Error('Google ID not saved correctly');
        if (output.data.profile_picture !== input.profile_picture) throw new Error('Profile picture not saved correctly');
      }
    },
  }
];
