import { createRouter, createWebHistory } from 'vue-router';

// Import Landing Pages
import Home from '../views/Landing/Home.vue';
import About from '../views/Landing/About.vue';
import Courses from '../views/Landing/Courses.vue';
import Contact from '../views/Landing/Contact.vue';
import Qualifications from '../views/Landing/Qualifications.vue';
import CenterSupport from '../views/Landing/CenterSupport.vue';
import International from '../views/Landing/International.vue';
import LearnerSupport from '../views/Landing/LearnerSupport.vue';
import BecomeACenter from '../views/Landing/BecomeACenter.vue';
import Services from '../views/Landing/Services.vue';

// Import Auth pages
import Login from '../views/Login.vue';

// Import Error Page
import Error404 from '../views/Landing/Error404.vue';

// Import Dashboard pages
import Dashboard from '@/views/Dashboard.vue';
import DashboardHome from '../views/dashboard/Home.vue';
import Students from '../views/dashboard/Students.vue';
import Certificates from '../views/dashboard/Certificates.vue';
import DashboardDefault from '../views/dashboard/DashboardDefault.vue';

// Define routes
const routes = [
  // verify root
  {
    path: '/verify/:certificateNumber',
    name: 'verify',
    component: () => import('@/views/VerifyStudent.vue')
  },
  // Dashboard Routes (Protected)
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: DashboardHome,
      },
      {
        path: 'default',
        name: 'default',
        component: DashboardDefault,
      },{
        path: 'students',
        name: 'students',
        component: Students,
      },
      {
        path: 'certificates',
        name: 'certificates',
        component: Certificates,
      },
    ],
  },

  // Landing Page Routes
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/qualifications',
    name: 'qualifications',
    component: Qualifications,
  },
  {
    path: '/center-support',
    name: 'centersupport',
    component: CenterSupport,
  },
  {
    path: '/international',
    name: 'international',
    component: International,
  },
  {
    path: '/learner-support',
    name: 'learnersupport',
    component: LearnerSupport,
  },
  {
    path: '/become-a-center',
    name: 'becomeacenter',
    component: BecomeACenter,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },

  // Auth Routes
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guest: true },
  },

  // Catch-all route for 404
  {
    path: '/:pathMatch(.*)*',
    name: 'error-404',
    component: Error404,
  },
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }; // Ensures scrolling to top on route change
  },
  routes,
});

// Route guards for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login if route requires authentication and user isn't logged in
    return next({ name: 'login' });
  }

  if (to.meta.guest && isAuthenticated) {
    // Redirect to dashboard if user is already logged in
    return next({ name: 'dashboard-home' });
  }

  next(); // Proceed to the next route
});

export default router;
