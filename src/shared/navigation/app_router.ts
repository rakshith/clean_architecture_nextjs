export const navigateToPage = (page: string, router: any) => {
    router.push(`/${page.toLowerCase()}`)
  }