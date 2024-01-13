const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'promiseWrite.txt'))

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nwakaka syiall')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
     console.log(err)   
    }
}

fileOps()

//read file
/* fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data.toString())
}) */

console.log('Hello...')


/* 
//write line
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'wakaka momen',(err) => {
    if (err) throw err
    console.log('Writing complete')

    /* fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nklaka syial',(err) => {
        if (err) throw err
        console.log('Append complete')
    }) 

    //rename files
    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
        if (err) throw err
        console.log('Rename complete')
    })
}) */

//append file
/* fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'testing aja kok',(err) => {
    if (err) throw err
    console.log('Append complete')
}) */


//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ' + err)
    process.exit(1)
})