import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  landing_page_content = {

    hero_section_tailwind: {
      logo: 'assets/three_twenty_way_logo.png',
      navigation: [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
      ],
      announcement: {
        text: '10 day free trial available to new members only. Cancel any time.',
        linkText: 'Read more',
        href: '#'
      },
      headline: {
        line1: '3–20 minutes daily',
        line2: 'better lives for elders'
      },
      description: 'From as little as 3 minutes a day, we’re helping thousands of people move better, feel better and live better - for longer.',
      primaryCTA: {
        text: 'Start your 10 day free trial',
        href: '#'
      },
      secondaryCTA: {
        text: 'Learn more',
        href: '#'
      },
      bgImage: 'assets/hero.jpg'
    },

    daily_wins: {
      headline: 'Build easy movement habits. See big results every day.',
      subtitle: 'The 3–20 Way, created by expert coaches, offers simple daily movements for older adults to build strength and mobility at home starting with just 3 minutes a day to age better.',
      cta: {
        text: 'Start Your 3–20 Journey',
        href: '#'
      }
    },
    available_data: {
      tagline: 'Move on your terms',
      title: 'Your routine. Anytime, anywhere.',
      description: 'Movement routines tailored to you, available anytime, anywhere—designed to fit your needs and your daily life.',
      image: 'assets/320way_banner.png',
      features: [
        {
          title: 'Real human coaches.',
          description: 'Expert-led sessions with real presenters—no AI, just trusted guidance.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Stream anywhere.',
          description: 'Watch on your laptop, tablet, or phone—at home or on the go.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Move anywhere.',
          description: 'Exercise at home, on holiday, or wherever suits your day.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'No equipment needed.',
          description: 'Start instantly without special gear or clothing.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 0 1-.82-1.256A8 8 0 0 1 18 9a22.47 22.47 0 0 1-1.228 7.351.75.75 0 1 1-1.417-.49A20.97 20.97 0 0 0 16.5 9 6.5 6.5 0 0 0 10 2.5ZM4.333 4.416a.75.75 0 0 1 .218 1.038A6.466 6.466 0 0 0 3.5 9a7.966 7.966 0 0 1-1.293 4.362.75.75 0 0 1-1.257-.819A6.466 6.466 0 0 0 2 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 0 1 1.038-.219ZM10 6.12a3 3 0 0 0-3.001 3.041 11.455 11.455 0 0 1-2.697 7.24.75.75 0 0 1-1.148-.965A9.957 9.957 0 0 0 5.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 0 1 8.996.084V9.15l-.005.297a.75.75 0 1 1-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 0 0-3-2.965Zm0 2.13a.75.75 0 0 1 .75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 1 1-1.186-.918A13.687 13.687 0 0 0 9.25 9a.75.75 0 0 1 .75-.75Zm3.529 3.698a.75.75 0 0 1 .584.885 18.883 18.883 0 0 1-2.257 5.84.75.75 0 1 1-1.29-.764 17.386 17.386 0 0 0 2.078-5.377.75.75 0 0 1 .885-.584Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Personalised routines.',
          description: 'Simple daily movements designed just for you.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Flexible preferences.',
          description: 'Adjust anytime as your confidence and needs evolve.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" /><path d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        }
      ]
    },
    movements_data: {
      logo: 'assets/three_twenty_way_logo.png',
      quote: '“Small daily steps lead to stronger, more confident living—meaningful movements with life-changing results.”',
      author: {
        name: 'Karen Case',
        role: 'CEO of 3-20 Way',
        image: 'assets/karen.png'
      }
    },
    faq_data: {
      title: 'Frequently asked questions',
      items: [
        {
          id: 'faq-0',
          question: "What is the 3-20 Way?",
          answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
          open: false
        },
        {
          id: 'faq-1',
          question: "How is this different from free videos online?",
          answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
          open: false
        },
        {
          id: 'faq-2',
          question: "What type of movements are in the 3-20 Way?",
          answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
          open: false
        },
        {
          id: 'faq-3',
          question: "How much time does it take?",
          answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
          open: false
        },
        {
          id: 'faq-4',
          question: "Who is it for?",
          answer: "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.",
          open: false
        },
        {
          id: 'faq-5',
          question: "Is it safe?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-6',
          question: "Will it make my condition worse?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-7',
          question: "Do I need equipment?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-8',
          question: "How much does it cost?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-9',
          question: "Can I have a free trial?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-10',
          question: "Can I change my programme?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-11',
          question: "Can I cancel at any time?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-12',
          question: "Can I pay for a gift membership for my loved one?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
        {
          id: 'faq-13',
          question: "How do I get started?",
          answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
          open: false
        },
      ]
    },
    testimonials_data: {
      title: 'Testimonials',
      subtitle: 'What our members say',
      featured: {
        quote: "“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”",
        author: 'Brenna Goyette',
        handle: '@brennagoyette',
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
        logo: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-100.svg'
      },
      group1: [
        [
          {
            quote: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
            author: 'Leslie Alexander',
            handle: '@lesliealexander',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          },
          {
            quote: "“Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.”",
            author: 'Michael Foster',
            handle: '@michaelfoster',
            image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          },
          {
            quote: "“Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.”",
            author: 'Dries Vincent',
            handle: '@driesvincent',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ],
        [
          {
            quote: "“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.”",
            author: 'Lindsay Walton',
            handle: '@lindsaywalton',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          },
          {
            quote: "“Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.”",
            author: 'Courtney Henry',
            handle: '@courtneyhenry',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ]
      ],
      group2: [
        [
          {
            quote: "“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.”",
            author: 'Tom Cook',
            handle: '@tomcook',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          },
          {
            quote: "“Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.”",
            author: 'Whitney Francis',
            handle: '@whitneyfrancis',
            image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ],
        [
          {
            quote: "“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.”",
            author: 'Leonard Krasner',
            handle: '@leonardkrasner',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          },
          {
            quote: "“Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque error ut et.”",
            author: 'Floyd Miles',
            handle: '@floydmiles',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          },
          {
            quote: "“Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.”",
            author: 'Emily Selman',
            handle: '@emilyselman',
            image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        ]
      ]
    },
    pricing_data: {
      title: 'Pricing',
      headline: 'Choose the right plan for you',
      description: 'The 3–20 Way keeps pricing simple with two flexible plans to suit you. Start with a 10-day free trial—cancel anytime, no charge if it’s not for you.',
      tiers: [
        {
          name: 'Pay Monthly',
          price: '£11.99',
          period: '/month',
          description: '(total cost of £143.88 per year)',
          features: [
            '10-day free trial (new members only)',
            'Cancel anytime—no commitment, no hidden fees.',
          ],
          cta: 'Start your 10 day free trial',
          featured: false
        },
        {
          name: 'Annual Plan',
          price: '£8.99',
          period: '/month',
          description: '(total cost of £107.88 per year)',
          features: [
            '10-day free trial (new members only)',
            'Cancel anytime—no commitment, no hidden fees.',
          ],
          cta: 'Start your 10 day free trial',
          featured: true
        }
      ]
    },
    feature_data: {
      title: 'Start Your Free 10-Day Journey',
      description: 'Try it free for 10 days—no risk, no payment details required.Enjoy full access with daily movement routines tailored just for you.',
      items: [
        {
          title: 'Free Trial',
          description: 'Sign up for your free 10-day trial and start moving with personalised routines designed just for you.',
          link: '#',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">
  <circle cx="12" cy="12" r="9" />
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor">1</text>
</svg>`
        },
        {
          title: 'Personalised Routine',
          description: 'Start your new daily movement moment routine, personalised completely to you.',
          link: '#',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">
  <circle cx="12" cy="12" r="9" />
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor">2</text>
</svg>`
        },
        {
          title: 'Build Confidence',
          description: 'Feel better, stronger and more confident each day as your routines adapt to your ability.',
          link: '#',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">
  <circle cx="12" cy="12" r="9" />
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor">3</text>
</svg>`
        }
      ]
    },
    available_data2: {
      tagline: 'Move on your terms',
      title: 'Your routine. Anytime, anywhere.',
      description: 'Movement routines tailored to you, available anytime, anywhere—designed to fit your needs and your daily life.',
      video: 'assets/320way_founder.mp4',
      features: [
        {
          title: 'Real human coaches.',
          description: 'Expert-led sessions with real presenters—no AI, just trusted guidance.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Stream anywhere.',
          description: 'Watch on your laptop, tablet, or phone—at home or on the go.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Move anywhere.',
          description: 'Exercise at home, on holiday, or wherever suits your day.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'No equipment needed.',
          description: 'Start instantly without special gear or clothing.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 0 1-.82-1.256A8 8 0 0 1 18 9a22.47 22.47 0 0 1-1.228 7.351.75.75 0 1 1-1.417-.49A20.97 20.97 0 0 0 16.5 9 6.5 6.5 0 0 0 10 2.5ZM4.333 4.416a.75.75 0 0 1 .218 1.038A6.466 6.466 0 0 0 3.5 9a7.966 7.966 0 0 1-1.293 4.362.75.75 0 0 1-1.257-.819A6.466 6.466 0 0 0 2 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 0 1 1.038-.219ZM10 6.12a3 3 0 0 0-3.001 3.041 11.455 11.455 0 0 1-2.697 7.24.75.75 0 0 1-1.148-.965A9.957 9.957 0 0 0 5.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 0 1 8.996.084V9.15l-.005.297a.75.75 0 1 1-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 0 0-3-2.965Zm0 2.13a.75.75 0 0 1 .75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 1 1-1.186-.918A13.687 13.687 0 0 0 9.25 9a.75.75 0 0 1 .75-.75Zm3.529 3.698a.75.75 0 0 1 .584.885 18.883 18.883 0 0 1-2.257 5.84.75.75 0 1 1-1.29-.764 17.386 17.386 0 0 0 2.078-5.377.75.75 0 0 1 .885-.584Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Personalised routines.',
          description: 'Simple daily movements designed just for you.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        },
        {
          title: 'Flexible preferences.',
          description: 'Adjust anytime as your confidence and needs evolve.',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="absolute top-1 left-1 size-5 text-indigo-400"><path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" /><path d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" fill-rule="evenodd" /></svg>`
        }
      ]
    },
  }
}
