import moviePage_page from '../pages/moviePage_page.vue';
import moviePageData_component from '../components/moviePageData_component.vue';
import chooseMovieData_component from '../components/chooseMovieData_component.vue';

const moviePage_router = [
    {
        path: '/phim',
        component: moviePage_page,
        meta: { requiresAuth: false },
        children: [
            {
                path: '',
                name: 'moviePageData_component',
                component: moviePageData_component,
            },
            {
                path: ':id',
                name: 'detailMovieData_component',
                component: chooseMovieData_component,
            },
        ],
    },
];

export default moviePage_router;