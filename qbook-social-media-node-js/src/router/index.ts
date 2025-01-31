import { Router } from 'express';
import adminRouter from './admin.routes';
import authRouter from './auth.routes';
import commentRouter from './comment.routes';
import followRouter from './follow.routes';
import friendRouter from './friend.routes';
import jobTitleRouter from './jobTitle.routes';
import postRouter from './post.routes';
import storyRouter from './story.routes';
import userRouter from './user.routes';
import workExperienceRouter from './workExperience.routes';
import deployRouter from './deploy.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/stories', storyRouter);
router.use('/friends', friendRouter);
router.use('/follow', followRouter);
router.use('/job-titles', jobTitleRouter);
router.use('/work-experiences', workExperienceRouter);
router.use('/deploy', deployRouter);

export default router;
