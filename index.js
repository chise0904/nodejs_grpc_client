const hello_proto = require('./demo.js')
const grpc = require('@grpc/grpc-js')

function main() {
    var client = new hello_proto.Greeter('172.17.0.2:9999', grpc.credentials.createInsecure())
    client.sayHello({ message: 'Hello' }, function(err, response) {
        if (err) {
            console.error('Error: ', err)
        } else {
            console.log(response.message)
        }
    })
}

main()



