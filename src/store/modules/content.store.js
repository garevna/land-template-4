/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  subject: 'Melbourne’s Fastest Internet',
  textForUserMail: 'Thank you for your interest in DGtek. A member of our team will be in touch shortly.',
  top: {
    header: '[Top Header]',
    text: '[Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text... Some text...]',
    button: '[Header Button]',
    image: '@/assets/pictures/lady-on-sofa.svg'
  },
  compare: {
    left: {
      title: 'DGtek',
      text: '[Some text about DGtek... Some text about DGtek... Some text about DGtek... Some text about DGtek...]',
      itemIcon: '',
      items: [
        {
          title: '[Point 1]',
          text: '[Some text 1... Some text 1... Some text 1...]'
        },
        {
          title: '[Point 2]',
          text: '[Some text 2... Some text 2... Some text 2...]'
        },
        {
          title: '[Point 3]',
          text: '[Some text 3... Some text 3... Some text 3...]'
        }
      ]
    },
    right: {
      title: 'NBN',
      text: '[Some text about NBN... Some text about NBN... Some text about NBN... Some text about NBN...]',
      itemIcon: '',
      items: [
        {
          title: '[Point 1]',
          text: '[Some text 1... Some text 1... Some text 1...]'
        },
        {
          title: '[Point 2]',
          text: '[Some text 2... Some text 2... Some text 2...]'
        },
        {
          title: '[Point 3]',
          text: '[Some text 3... Some text 3... Some text 3...]'
        }
      ]
    }
  },
  banner: {
    header: {
      black: 'Gigabit Internet',
      red: 'that\'s truly fast'
    },
    text: 'Choose fibre and enjoy Internet at the speed of light!'
  },
  aside: {
    header: '[Title]',
    text: '[Some text here... Some text here... Some text here... Some text here... Some text here... Some text here... Some text here... Some text here...]',
    picture: '@/assets/pictures/lady_on_sofa.svg',
    button: '[Button text]'
  },
  userForm: {
    title: '[Form title]',
    messagePlaceholder: 'Enquiry*',
    button: 'Form button'
  },
  benefits: {
    header: '[Benefits Title]',
    text: '[Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text... Benefits text...]',
    button: 'Benefits button',
    items: [
      {
        title: '[Title]',
        icon: require('@/assets/benefits/globe.svg'),
        text: '[Text... Text... Text... Text... Text... Text... Text... Text... Text... Text...]'
      },
      {
        title: '[Title]',
        icon: require('@/assets/benefits/security.svg'),
        text: '[Text... Text... Text... Text... Text... Text... Text... Text... Text... Text...]'
      },
      {
        title: '[Title]',
        icon: require('@/assets/benefits/speed.svg'),
        text: '[Text... Text... Text... Text... Text... Text... Text... Text... Text... Text...]'
      }
    ]
  },
  testimonials: {
    header: '[Title for reviews]',
    button: 'Reviews button'
  },
  faq: {
    header: '[FAQs Title]',
    button: '[FAQs Button]',
    items: [
      {
        question: '[Question 1]',
        answer: '[Answer 1]'
      },
      {
        question: '[Question 2]',
        answer: '[Answer 2]'
      },
      {
        question: '[Question 3]',
        answer: '[Answer 3]'
      },
      {
        question: '[Question 4]',
        answer: '[Answer 4]'
      },
      {
        question: '[Question 5]',
        answer: '[Answer 5]'
      }
    ]
  },
  blog: {
    header: 'Title around articles',
    articles: [1, 4, 3, 7]
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
  }
}

const getters = {
  editorEndpoint: (state, getters, rootState) => `${rootState.host}/content`
}

const mutations = {
  //
}

const actions = {
  async GET_DATA ({ getters, commit }) {
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
