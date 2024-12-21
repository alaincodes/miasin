import { defineStore } from 'pinia';

export const useFakeContentStore = defineStore('fakeContent', {
  state: () => ({
    cases: [
      {
        date: '12/12/24',
        time: '11h20',
        message: 'Un homme a passé sa vie à chercher la vérité, mais à la fin il a réalisé qu’il avait oublié de vivre. Est-il coupable d’avoir ignoré la vie au profit de la quête de la vérité ?',
        user: 'L\'accusé 1',
        judgement: 'Guilty',
        guiltyCount: 22,
        innocentCount: 45,
      },
      {
        date: '14/12/24',
        time: '16h00',
        message: 'Une personne a passé des années à accumuler des connaissances, mais n’a jamais agi en conséquence. Est-elle coupable de trahir la véritable essence de la sagesse ?',
        user: 'L\'accusé 2',
        judgement: 'Guilty',
        guiltyCount: 38,
        innocentCount: 60,
      },
      {
        date: '18/12/24',
        time: '13h30',
        message: 'Un homme a menti pour protéger les sentiments d’une personne, mais a fini par créer une illusion qui l’a emprisonné. Est-il coupable d’avoir sacrifié la vérité pour la paix ?',
        user: 'L\'accusé 3',
        judgement: 'Innocent',
        guiltyCount: 10,
        innocentCount: 55,
      },
      {
        date: '19/12/24',
        time: '09h10',
        message: 'Une femme a sacrifié sa propre liberté pour offrir une sécurité matérielle à sa famille. Est-elle coupable d’avoir échangé son bien-être contre une sécurité illusoire ?',
        user: 'L\'accusé 4',
        judgement: 'Innocent',
        guiltyCount: 17,
        innocentCount: 73,
      },
      {
        date: '22/12/24',
        time: '20h05',
        message: 'Un homme a tout donné pour poursuivre un rêve qui, au final, s’est avéré futile. Est-il coupable d’avoir perdu sa vie dans une illusion ?',
        user: 'L\'accusé 5',
        judgement: 'Guilty',
        guiltyCount: 25,
        innocentCount: 90,
      },
      {
        date: '23/12/24',
        time: '14h40',
        message: 'Un philosophe a passé toute sa vie à déconstruire les idées des autres, mais n’a jamais formulé une pensée originale. Est-il coupable de n’avoir pas cherché à apporter une contribution authentique au monde ?',
        user: 'L\'accusé 6',
        judgement: 'Guilty',
        guiltyCount: 56,
        innocentCount: 81,
      },
      {
        date: '24/12/24',
        time: '18h50',
        message: 'Un artiste a peint un tableau représentant l’humanité, mais avec une image de l’humanité déformée et brisée. Est-il coupable d’avoir révélé une vérité inconfortable sans offrir de solution ?',
        user: 'L\'accusé 7',
        judgement: 'Innocent',
        guiltyCount: 8,
        innocentCount: 12,
      },
      {
        date: '25/12/24',
        time: '07h00',
        message: 'Un homme a cherché la perfection dans tout ce qu’il faisait, mais n’a jamais atteint la paix intérieure. Est-il coupable d’avoir sacrifé son bonheur pour une quête sans fin ?',
        user: 'L\'accusé 8',
        judgement: 'Guilty',
        guiltyCount: 34,
        innocentCount: 56,
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
