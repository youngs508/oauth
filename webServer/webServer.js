const http = request('http');

const port = 5000;

const ip = localhost;

const server = http.createServer((request, response) => {

  // upper, lower 두가지 엔드포인트를 구현하기
  // upper, lower외에는 안 만들어도 됨, 다른 것들은 다 error로 처리.
  if(/*메소드가 options*/) { // preflight settings
      //CORS설정을 돌려줘야 한다.
  }
  if(/*메소드가 POST고 url이 /upper면*/) {
      // 대문자로 응답을 돌려줘야 한다.
  } else if(/*메소드가 POST고 url이 /lower면*/) {
      // 소문자로 응답을 돌려줘야 한다.
  } else {
      // 에러로 처리합니다. bad request
  }

  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );
  response.writeHead(200, defaultCorsHeader);
  response.end('hello mini-server sprints');
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET POST PUT DELETE OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};