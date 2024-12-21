import { defineStore } from 'pinia';

export const useFakeContentStore = defineStore('fakeContent', {
  state: () => ({
    cases: [
      {
        date: '12/12/24',
        time: '12h30',
        message: 'Un homme perd une heure de sa vie dans les transports en commun, réfléchissant au sens de l’existence. Est-il coupable de gaspillage de temps ?',
        user: 'L\'accusé 1',
        judgement: 'Innocent',
        guiltyCount: 2,
        innocentCount: 5,
      },
      {
        date: '15/12/24',
        time: '11h04',
        message: 'Une personne observe la mer pendant des heures sans comprendre ce qu’elle cherche. Est-ce une forme de quête spirituelle ou juste de l’indécision ?',
        user: 'L\'accusé 2',
        judgement: 'Innocent',
        guiltyCount: 8,
        innocentCount: 34,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Un individu passe sa journée à regarder des vidéos en ligne, se demandant si la réalité virtuelle n’est qu’une métaphore de la vie elle-même. Est-il coupable d’évasion ?',
        user: 'L\'accusé 3',
        judgement: 'Guilty',
        guiltyCount: 897,
        innocentCount: 64,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Une personne débat de l’idée de "liberté" pendant une soirée entre amis, sans parvenir à une conclusion. A-t-elle perdu sa liberté d’expression ou simplement son temps ?',
        user: 'L\'accusé 4',
        judgement: 'Guilty',
        guiltyCount: 649,
        innocentCount: 345,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Un philosophe se demande si l’absurdité de l’existence justifie un sourire. Est-il coupable de nihilisme ou simplement d’un sens de l’humour trop complexe ?',
        user: 'L\'accusé 5',
        judgement: 'Innocent',
        guiltyCount: 29,
        innocentCount: 35,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Une personne se perd dans ses pensées pendant une longue marche en forêt, se demandant si elle est une simple particule dans l’univers. Faut-il la condamner pour avoir perdu son sens de la direction ?',
        user: 'L\'accusé 6',
        judgement: 'Guilty',
        guiltyCount: 2984,
        innocentCount: 455,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Un homme passe des heures à regarder les étoiles, se demandant si l’univers l’observe lui aussi. Peut-il être jugé coupable de trop de contemplation ?',
        user: 'L\'accusé 7',
        judgement: 'Guilty',
        guiltyCount: 9742,
        innocentCount: 8745,
      },
      {
        date: '20/12/24',
        time: '2h21',
        message: 'Une personne tombe dans un abîme de réflexions existentielles pendant une conversation banale. Est-elle coupable d’avoir dévié de la réalité pour explorer l’infini ?',
        user: 'L\'accusé 8',
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
