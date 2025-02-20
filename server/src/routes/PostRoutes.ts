import { IReq, IRes } from './common';
import { AuthResponse } from '../types/auth.types';
import PostService from '@src/services/PostService';
import { log } from 'console';


async function create(req: IReq, res: IRes) {
   console.log('create post');
  //  console.log(req.body);
    try{
      const post = req.body;
    //add element in post 
    post.status='PENDING'
    console.log(post)
    const response = await PostService.create(post);
    console.log(response)
    if (typeof response === 'object') {
      return res.status(200).json({ success: true, message: 'Post created successfully', data: response });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to create post' });
    }
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
}
export default {
    create,
} as const;