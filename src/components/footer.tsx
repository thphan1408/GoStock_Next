import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react'

const FooterSection = () => {
  const year = new Date().getFullYear()

  return (
    <Footer container className="rounded-none">
      <FooterCopyright href="#" by="GoStock" year={year} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  )
}

export default FooterSection
