interface ApiResponse<T> {
  success: boolean
  data: T
  message: string
}

interface user {
  id: number,
  name: string,
  email: string
}

const apiResponse: ApiResponse<user> = {
  success: true,
  data: {
    id: 1,
    name: "Aminul",
    email: "aminulislam424842@gmail.com"
  },
  message: "User fetched successfully"
}

console.log(apiResponse)