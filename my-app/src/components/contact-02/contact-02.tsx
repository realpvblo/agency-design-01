import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from 'lucide-react';

const Contact02Page = () => (
  <div className="relative min-h-screen flex items-center justify-center py-24 px-6 w-full lg:w-auto">
    <h1 className="pointer-events-none select-none absolute top-16 left-1/2 -translate-x-1/2 text-[7rem] font-bold md:text-[10rem]">
      Kontakt
    </h1>
    <div className="relative max-w-7xl w-full mx-auto text-center">
      {/* <b className="text-muted-foreground uppercase font-semibold text-sm tracking-widest">
        Contact Us
      </b>
      <h2 className="text-[7rem] font-bold md:text-[10rem]">
        Kontakt
      </h2>
      <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
        We&apos;d love to hear from you. Please fill out this form or shoot us an email.
      </p> */}

      <div className="mt-32 grid lg:grid-cols-2 gap-24">
        {/* Contact info section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-10">
          <div className='flex flex-col align-middle items-center'>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            <p className="my-2.5 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <a
              className="font-medium text-primary"
              href="mailto:akashmoradiya3444@gmail.com"
            >
              akashmoradiya3444@gmail.com
            </a>
          </div>

          <div className='flex flex-col align-middle items-center'>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Live chat</h3>
            <p className="my-2.5 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <a className="font-medium text-primary" href="#">
              Start new chat
            </a>
          </div>

          <div className='flex flex-col align-middle items-center'>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Office</h3>
            <p className="my-2.5 text-muted-foreground">
              Come say hello at our office HQ.
            </p>
            <a
              className="font-medium text-primary"
              href="https://map.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              100 Smith Street Collingwood <br /> VIC 3066 AU
            </a>
          </div>

          <div className='flex flex-col align-middle items-center'>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Phone</h3>
            <p className="my-2.5 text-muted-foreground">
              Mon-Fri from 8am to 5pm.
            </p>
            <a className="font-medium text-primary" href="tel:+15550000000">
              +1 (555) 000-0000
            </a>
          </div>
        </div>

        {/* Form */}
        <Card className="overflow-hidden rounded-2xl p-6 border border-border/50 bg-background/20 backdrop-blur-sm shadow-[inset_0_1px_30px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.01] hover:border-primary/40 max-w-[500px] mx-auto w-full md:max-w-[unset] md:mx-[unset] md:w-[unset]">
          <CardContent className="p-6 md:p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-2 bg-white/80 h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-2 bg-white/80 h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-2 bg-white/80 h-10 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-2 bg-white/80 shadow-none"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" className="bg-background" />
                  <Label htmlFor="acceptTerms" className="gap-0">
                    You agree to our
                    <a href="#" className="underline ml-1">
                      terms and conditions
                    </a>
                    <span>.</span>
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
