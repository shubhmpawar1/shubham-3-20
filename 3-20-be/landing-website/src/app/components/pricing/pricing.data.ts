export const courses: any = {
    'Software Development': {
        title: 'Software Development',
        content: {
            technical: [
                {
                    title: 'HTML/CSS',
                    icon: '',
                    imaxge: 'https://www.vhv.rs/dpng/d/479-4793148_thumb-image-html-and-css-logos-hd-png.png',
                    price: 10,
                    is_selected: true,
                },
                {
                    title: 'Javascript',
                    icon: '',
                    image: 'https://img.favpng.com/14/9/25/javascript-logo-png-favpng-pz50Na6k8pMjVYViv9nF9bVtm.jpg',
                    price: 50,
                    is_selected: false,
                },
                {
                    title: 'Angular',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKvWN8Z5BDJpeYiLQ9s2QoTrH800lNQyfWQ&s',
                    price: 300,
                    is_selected: false,
                },
                {
                    title: 'React',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrWUFq_bpglWhTjhAee9KONx88MP6jUP4yQ&s',
                    price: 1000,
                    is_selected: false,
                },
                {
                    title: 'Nodejs',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'SQL',
                    icon: '',
                    image: 'https://www.vhv.rs/dpng/d/256-2563210_sql-programming-language-logo-hd-png-download.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'No SQL',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Java',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdWGl00O5hS7sDlc98yJT_gszgNh1wwUlQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Python',
                    icon: '',
                    image: 'https://img.favpng.com/9/6/14/python-logo-python-programming-language-logo-vqX2L0UJ_t.jpg',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Git',
                    icon: '',
                    image: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png',
                    price: 0,
                    is_selected: false,
                }
            ],
            non_technical: [
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Job Guarantee',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Logic Building',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Speed Typing',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Englih Proficiency',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Attitude Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Descipline Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                }
            ]
        },
        plans: [
            {
                type: 'basic',
                price: 4999,
                duration: '3 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': false,
                    'Monthly Assignments': false,
                    'One-on-One Doubt Sessions': false,
                    'Interview Guidance': false,
                    'Job Guarantee': false
                }
            },
            {
                type: 'standard',
                price: 7999,
                duration: '6 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': false,
                    'Interview Guidance': false,
                    'Job Guarantee': false
                }
            },
            {
                type: 'premium',
                price: 12999,
                duration: '12 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': true,
                    'Interview Guidance': true,
                    'Job Guarantee': true
                }
            }
        ]
    },
    'UI/UX Design': {
        title: 'UI/UX Design',
         content: {
            technical: [
                {
                    title: 'HTML/CSS',
                    icon: '',
                    image: 'https://www.vhv.rs/dpng/d/479-4793148_thumb-image-html-and-css-logos-hd-png.png',
                    price: 10,
                    is_selected: true,
                },
                {
                    title: 'Javascript',
                    icon: '',
                    image: 'https://img.favpng.com/14/9/25/javascript-logo-png-favpng-pz50Na6k8pMjVYViv9nF9bVtm.jpg',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Angular',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKvWN8Z5BDJpeYiLQ9s2QoTrH800lNQyfWQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'React',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrWUFq_bpglWhTjhAee9KONx88MP6jUP4yQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Nodejs',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'SQL',
                    icon: '',
                    image: 'https://www.vhv.rs/dpng/d/256-2563210_sql-programming-language-logo-hd-png-download.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'No SQL',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Java',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdWGl00O5hS7sDlc98yJT_gszgNh1wwUlQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Python',
                    icon: '',
                    image: 'https://img.favpng.com/9/6/14/python-logo-python-programming-language-logo-vqX2L0UJ_t.jpg',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Git',
                    icon: '',
                    image: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png',
                    price: 0,
                    is_selected: false,
                }
            ],
            non_technical: [
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Job Guarantee',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Logic Building',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Speed Typing',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Englih Proficiency',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Attitude Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Descipline Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                }
            ]
        },
        plans: [
            {
                type: 'basic',
                price: 4999,
                duration: '3 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': false,
                    'Monthly Assignments': false,
                    'One-on-One Doubt Sessions': false,
                    'Interview Guidance': false,
                    'Job Guarantee': false
                }
            },
            {
                type: 'standard',
                price: 7999,
                duration: '6 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': true,
                    'Interview Guidance': true,
                    'Job Guarantee': true
                }
            },
            {
                type: 'premium',
                price: 12999,
                duration: '12 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': true,
                    'Interview Guidance': true,
                    'Job Guarantee': true
                }
            }
        ]
    },
    'Product Management': {
        title: 'Product Management',
       content: {
            technical: [
                {
                    title: 'HTML/CSS',
                    icon: '',
                    image: 'https://www.vhv.rs/dpng/d/479-4793148_thumb-image-html-and-css-logos-hd-png.png',
                    price: 10,
                    is_selected: true,
                },
                {
                    title: 'Javascript',
                    icon: '',
                    image: 'https://img.favpng.com/14/9/25/javascript-logo-png-favpng-pz50Na6k8pMjVYViv9nF9bVtm.jpg',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Angular',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKvWN8Z5BDJpeYiLQ9s2QoTrH800lNQyfWQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'React',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrWUFq_bpglWhTjhAee9KONx88MP6jUP4yQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Nodejs',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'SQL',
                    icon: '',
                    image: 'https://www.vhv.rs/dpng/d/256-2563210_sql-programming-language-logo-hd-png-download.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'No SQL',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Java',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdWGl00O5hS7sDlc98yJT_gszgNh1wwUlQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Python',
                    icon: '',
                    image: 'https://img.favpng.com/9/6/14/python-logo-python-programming-language-logo-vqX2L0UJ_t.jpg',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Git',
                    icon: '',
                    image: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png',
                    price: 0,
                    is_selected: false,
                }
            ],
            non_technical: [
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Job Guarantee',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Logic Building',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Speed Typing',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Englih Proficiency',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Attitude Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Descipline Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                }
            ]
        },
        plans: [
            {
                type: 'basic',
                price: 4999,
                duration: '3 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': false,
                    'Monthly Assignments': false,
                    'One-on-One Doubt Sessions': false,
                    'Interview Guidance': false,
                    'Job Guarantee': false
                }
            },
            {
                type: 'standard',
                price: 7999,
                duration: '6 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': true,
                    'Interview Guidance': true,
                    'Job Guarantee': true
                }
            },
            {
                type: 'premium',
                price: 12999,
                duration: '12 months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': true,
                    'Interview Guidance': true,
                    'Job Guarantee': true
                }
            }
        ]
    },
    'Software Testing': {
        title: 'Software Testing',
        content: {
            technical: [
                {
                    title: 'HTML/CSS',
                    icon: '',
                    image: 'https://www.vhv.rs/dpng/d/479-4793148_thumb-image-html-and-css-logos-hd-png.png',
                    price: 10,
                    is_selected: true,
                },
                {
                    title: 'Javascript',
                    icon: '',
                    image: 'https://img.favpng.com/14/9/25/javascript-logo-png-favpng-pz50Na6k8pMjVYViv9nF9bVtm.jpg',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Angular',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKvWN8Z5BDJpeYiLQ9s2QoTrH800lNQyfWQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'React',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrWUFq_bpglWhTjhAee9KONx88MP6jUP4yQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Nodejs',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'SQL',
                    icon: '',
                    image: 'https://www.vhv.rs/dpng/d/256-2563210_sql-programming-language-logo-hd-png-download.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'No SQL',
                    icon: '',
                    image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Java',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdWGl00O5hS7sDlc98yJT_gszgNh1wwUlQ&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Python',
                    icon: '',
                    image: 'https://img.favpng.com/9/6/14/python-logo-python-programming-language-logo-vqX2L0UJ_t.jpg',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Git',
                    icon: '',
                    image: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png',
                    price: 0,
                    is_selected: false,
                }
            ],
            non_technical: [
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Computer Basics',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Job Guarantee',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Logic Building',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Speed Typing',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Englih Proficiency',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Attitude Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                },
                {
                    title: 'Descipline Training',
                    icon: '',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM75-uuPlBKhEQMCycDnJgzSk7RfSEU6HOog&s',
                    price: 0,
                    is_selected: false,
                }
            ]
        },
        plans: [
            {
                type: 'basic',
                price: 4999,
                duration: '3 Months',

                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': false,
                    'Weekly Online assessment': true,
                    'Offline lectures': false,
                    'Monthly Assignments': false,
                    'One-on-One Doubt Sessions': false,
                    'Interview Guidance': false,
                    'Job Guarantee': false
                }
            },
            {
                type: 'standard',
                price: 7999,
                duration: '6 Months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': true,
                    'Interview Guidance': true,
                    'Job Guarantee': true
                }
            },
            {
                type: 'premium',
                price: 12999,
                duration: '12 Months',
                features: {
                    'Recorded Lectures': true,
                    'Self Paced Learning': true,
                    'Weekly Doubt Sessions': true,
                    'Community Based Learning': true,
                    'Weekly Online assessment': true,
                    'Offline lectures': true,
                    'Monthly Assignments': true,
                    'One-on-One Doubt Sessions': true,
                    'Interview Guidance': true,
                    'Job Guarantee': true
                }
            }
        ]
    }
}