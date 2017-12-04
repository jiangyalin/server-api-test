//mongodb配置文件
module.exports = {
    port: 8083,
    session: {
        secret: 'pixivDB',
        key: 'pixivDB',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/pixivDB'
};