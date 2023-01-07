import { lazyLoad } from "config/utils";
import { PagesRoute } from "./type";

const Home = lazyLoad(() => import("pages/Home"));
const Crash = lazyLoad(() => import("pages/Crash"));
const Dice = lazyLoad(() => import("pages/Dice"));
const Plinko = lazyLoad(() => import("pages/Plinko"));
const Limbo = lazyLoad(() => import("pages/Limbo"));
const Poker = lazyLoad(() => import("pages/Poker"));
const Diamonds = lazyLoad(() => import("pages/Diamonds"));
const Roulette = lazyLoad(() => import("pages/Roulette"));
const BlackJack = lazyLoad(() => import("pages/BlackJack"));
const Keno = lazyLoad(() => import("pages/Keno"));
const Mines = lazyLoad(() => import("pages/Mines"));
const Fortune = lazyLoad(() => import("pages/Fortune"));
const Towers = lazyLoad(() => import("pages/Towers"));
const Lottery = lazyLoad(() => import("pages/Lottery"));

const _404 = lazyLoad(() => import("pages/404"));

export const routes: PagesRoute = {
  "/": {
    data: {
      component: Home,
    },

    crash: {
      data: {
        component: Crash,
      },
    },

    dice: {
      data: {
        component: Dice,
      },
    },

    plinko: {
      data: {
        component: Plinko,
      },
    },

    limbo: {
      data: {
        component: Limbo,
      },
    },
    roulette: {
      data: {
        component: Roulette,
      },
    },

    // "video-poker": {
    //   data: {
    //     component: Poker,
    //   },
    // },

    // diamonds: {
    //   data: {
    //     component: Diamonds,
    //   },
    // },


    // blackJack: {
    //   data: {
    //     component: BlackJack,
    //   },
    // },

    // keno: {
    //   data: {
    //     component: Keno,
    //   },
    // },

    // mines: {
    //   data: {
    //     component: Mines,
    //   },
    // },

    // towers: {
    //   data: {
    //     component: Towers,
    //   },
    // },

    // lottery: {
    //   data: {
    //     component: Lottery,
    //   },
    // },

    // "fortune-quest": {
    //   data: {
    //     component: Fortune,
    //   },
    // },
  },

  "*": {
    data: {
      component: _404,
    },
  },
};
