interface Profile {
  name: string,
  email?: string,
  phone?: string
}

const profile: Required<Profile> = {
  name: "Aminul",
  email: "aminul@example.com",
  phone: "01700000000"
}

console.log(profile)