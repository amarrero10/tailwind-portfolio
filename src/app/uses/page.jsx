import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Frontend">
          <Tool title="React">
            The first framework I learned and the most used one. The resources
            and community are just great.
          </Tool>
          <Tool title="Next.js">
            I love Next.js. It’s slowly becoming the standard for me. I love the
            server-side rendering and the static site generation.
          </Tool>
          <Tool title="TailwindCSS">
            I love Tailwind. It’s the best thing that happened to me. Writing
            CSS has never been so fun and fast. Highly recommend.
          </Tool>
          <Tool title="JavaScript">
            The brains of the operation. The language I use the most. Perfect
            for building web applications especially when a app doesn&apos;t
            need react.
          </Tool>
          <Tool title="CSS">
            Good ol’ CSS. I still use it for some projects and definitely for
            key frame animations. It’s not going anywhere anytime soon.
          </Tool>
          <Tool title="HTML">
            The foundation of the web. I still use it frequently. It’s like
            breathing at this point.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Backend">
          <Tool title="Express">
            I use Express for all of my personal and freelance projects. Again,
            another framework that has a great community and resources.
          </Tool>
          <Tool title="Node">
            Its event-driven architecture and non-blocking I/O model make it
            perfect for building scalable and high-performance applications.
            Again, I use it for all of my personal and freelance projects.
          </Tool>
          <Tool title="Python">
            Love the simplicity and versatility of Python. Have an idea? You can
            bet Python can help you bring it to life. Super readable as well.
          </Tool>
          <Tool title="FastAPI">
            FastAPI is a modern, fast (high-performance), web framework and my
            go to for building APIs with Python.
          </Tool>
          <Tool title="Flask">
            First framework I learned for Python. Its simplicity and flexibility
            make it easy to get started.
          </Tool>
          <Tool title="PostgreSQL">
            PostgreSQL is my preferred relational database. With its support for
            complex queries, transactions, and extensibility, it&apos;s a
            powerful choice for applications of all sizes. Love the open-source
            nature of it.
          </Tool>
          <Tool title="MongoDB">
            MongoDB is my go-to NoSQL database. Its flexible schema,
            scalability, and ease of use make it an excellent choice for
            handling diverse and evolving data.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air M2 (2022)">
            I was using a HP Laptop prior to this and the difference is night
            and day. I’ve never heard the fans turn on a single time, even under
            the incredibly heavy loads I put it through with my various
            applications.
          </Tool>
          <Tool title="LG 49in UltraWide Dual QHD IPS Curved LED Monitor (LG 49WL95C-W) ">
            I know it huge but talk about productivity! It&apos;s like having
            two 27 inch monitors in one. Highly recommend.
          </Tool>
          <Tool title="Keychron K2 Wireless Mechanical Keyboard">
            I love that it&apos;s wireless and has a Mac layout. Not much else
            to say. It’s a keyboard.
          </Tool>
          <Tool title="Logitech G G502 HERO">
            I get the best of both worlds with this mouse. It&apos;s great for
            gaming and productivity. I love the customizable button and the
            scroll wheel.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I’ve been using VS Code for years and I don’t see that changing
            anytime soon. It’s just the best.
          </Tool>
          <Tool title="Git">
            I don’t think I need to explain this one. It’s Git.
          </Tool>
          <Tool title="Notion">
            I use Notion for everything. It’s my second brain. I keep all of my
            notes, tasks, and projects in there. Great tool for planning or even
            just writing down ideas to brainstorm later.
          </Tool>
          <Tool title="Mock Flow">
            I use MockFlow for wireframing and prototyping. It’s simple and
            effective and a quick way to get ideas out of my head and into a
            visual format.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Great tool for design, might I say the best. I use it for all of my
            project mock ups and designs for clients and personal projects. It’s
            perfect.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
