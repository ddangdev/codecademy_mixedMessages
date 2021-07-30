const messages = ["This will be the best thing that will ever had happen to you", "Young is young to young in the young", "Hello, and goodbye"];

const mixedMessages = () => {
  const randomNumber = Math.floor(Math.random() * messages.length);

  console.log(messages[randomNumber])
}