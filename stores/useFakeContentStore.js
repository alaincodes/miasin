import { defineStore } from 'pinia';

export const useFakeContentStore = defineStore('fakeContent', {
  state: () => ({
    cases: [
      {
        date: '12/12/24',
        time: '12h30',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        user: 'The accused 1',
        judgement: 'Innocent',
        guiltyCount: 2,
        innocentCount: 5,
      },
      {
        date: '15/12/24',
        time: '11h04',
        message: 'Un pigeon vole une frite sur une table de café en terrasse. Est-il coupable de "vol à l’étalage" ?',
        user: 'The accused 2',
        judgement: 'Innocent',
        guiltyCount: 8,
        innocentCount: 34,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Nullam cursus lacinia erat. Fusce commodo aliquam arcu. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam rhoncus. Praesent nec nisl a purus blandit viverra. Donec sodales sagittis magna. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Aenean ut eros et nisl sagittis vestibulum.',
        user: 'The accused 3',
        judgement: 'Guilty',
        guiltyCount: 897,
        innocentCount: 64,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Ut tincidunt tincidunt erat. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vivamus elementum semper nisi.',
        user: 'The accused 3',
        judgement: 'Guilty',
        guiltyCount: 649,
        innocentCount: 345,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Praesent blandit laoreet nibh. Fusce pharetra convallis urna. Cras ultricies mi eu turpis hendrerit fringilla. Maecenas vestibulum mollis diam.',
        user: 'The accused 3',
        judgement: 'Innocent',
        guiltyCount: 29,
        innocentCount: 35,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Fusce a quam. In ac felis quis tortor malesuada pretium. Donec venenatis vulputate lorem. Etiam iaculis nunc ac metus.',
        user: 'The accused 3',
        judgement: 'Guilty',
        guiltyCount: 2984,
        innocentCount: 455,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.',
        user: 'The accused 3',
        judgement: 'Guilty',
        guiltyCount: 9742,
        innocentCount: 8745,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Aenean commodo ligula eget dolor. Sed a libero.',
        user: 'The accused 3',
        judgement: 'Guilty',
        guiltyCount: 2098,
        innocentCount: 890,
      },
    ],
    selectedCase: null,
  }),

  getters: {
    guiltyCases: (state) => state.cases.filter((caseItem) => caseItem.judgement === 'Guilty'),
  },

  actions: {
    addCase(newCase) {
      this.cases.push(newCase)
    },
    selectCase(caseItem) {
      this.selectedCase = caseItem
    },
    selectFirstCaseIfNeeded() {
      if (!this.selectedCase && this.cases.length > 0) {
        this.selectedCase = this.cases[0];
      }
    }
  },
})
