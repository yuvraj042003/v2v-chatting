const express = require('express')
const app = express();;
const server = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(server, {
    cors: {
        origin:"*",
        methods:["GET","POST"]
    }
})
//######################cors-start########
app.use(cors())

const port = process.env.PORT || 5000

app.get('/', (req,res)=>{
    res.send("The Video-calling server is running on the port no 5000")
})
// ###########################SOCKET.IO PART-START#########################
io.on('connection', (socket)=>{
    socket.emit('me', socket.id);
    socket.on('disconnect',()=>{
        socket.broadcast.emit("callEnded");
    });
    socket.on('callUser',({userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("callUser", {signal: signalData, from, name});
    })

    socket.on("answerCall", (data)=>{
         io.to(data.to).emit("callAccepted", data.signal);
    })
})
// ###########################SOCKET.IO PART-END#########################

server.listen(port, ()=>{
    console.log(`server is running on the ${port}`)
})