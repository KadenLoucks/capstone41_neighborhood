import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
<<<<<<< HEAD
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);
=======
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

>>>>>>> c57b9c2d2542f9f4d9fb644b60bcdef07b0b2588
export default PostMessage;