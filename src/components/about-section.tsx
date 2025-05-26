import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl animate-on-scroll opacity-0">
            About Me
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
            I&apos;m a passionate full-stack developer with experience in building web applications and IoT systems. With a
            BSc in Computer Engineering, I specialize in creating responsive, user-friendly interfaces and robust
            backend systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full animate-on-scroll opacity-0">
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I started my journey in computer engineering, where I developed a strong foundation in both hardware
                  and software. I&apos;ve since focused on web development, working with modern frameworks and technologies
                  to build scalable applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>My Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and creating intuitive user experiences. I&apos;m passionate
                  about staying up-to-date with the latest technologies and best practices in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

