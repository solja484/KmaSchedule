import { CurrentState } from "../../models/entities/CurrentState";

export const breadcrumbs = {
  MAIN: [
    {
      text: "Головна",
      active: true,
      state: CurrentState.MAIN
    }
  ],
  ALL: [
    {
      text: "Головна",
      href: "/",
      state: CurrentState.MAIN
    },
    {
      text: "Інформація",
      active: true
    },
    {
      text: "Розклади",
      active: true
    }
  ],
  CREATE: [
    {
      text: "Головна",
      href: "/",
      state: CurrentState.MAIN
    },
    {
      text: "Інформація",
      active: true
    },
    {
      text: "Розклади",
      href: "/schedules",
      state: CurrentState.SCHEDULES_ALL
    },
    {
      text: "Додати розклад",
      active: true
    }
  ],
  VIEW: [
    {
      text: "Головна",
      href: "/",
      state: CurrentState.MAIN
    },
    {
      text: "Інформація",
      active: true
    },
    {
      text: "Розклади",
      href: "/schedules",
      state: CurrentState.SCHEDULES_ALL
    },
    {
      text: "Перегляд розкладу",
      active: true
    }
  ],
  EDIT: [
    {
      text: "Головна",
      href: "/",
      state: CurrentState.MAIN
    },
    {
      text: "Інформація",
      active: true
    },
    {
      text: "Розклади",
      href: "/schedules",
      state: CurrentState.SCHEDULES_ALL
    },
    {
      text: "Редагування розкладу",
      active: true
    }
  ],
  PROFILE: [
    {
      text: "Головна",
      href: "/",
      state: CurrentState.MAIN
    },
    {
      text: "Особистий кабінет",
      active: true
    }
  ],
  AUTH: []
};
