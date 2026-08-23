interface SuccessResponse {
  status: "success",
  message: string
}
interface ErrorResponse {
  status: "error",
  message: string
}

type Response = SuccessResponse | ErrorResponse;

function handleResponse(response: Response): string {
  if (response.status === "success") {
    return `Success: ${response.message}`
  }
  else {
    return `Error: ${response.message}`
  }
}

console.log(handleResponse({
  status: "success",
  message: "Data loaded"
}))
console.log(handleResponse({
  status: "error",
  message: "Something went wrong"
}))