import { useState, type FormEvent } from "react";
import { Check, Github, Linkedin, Mail, MessageSquareText, Copy, RefreshCcw, Facebook, Phone } from "lucide-react";
import { toast } from "sonner";
import { DiscordIcon } from "./icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EMAIL = "arpansarkar112@gmail.com";
const PHONE = "+358403286143";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [captcha, setCaptcha] = useState(() => createCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard.", {
        description: EMAIL,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy manually.");
    }
  };

  const resetForm = () => {
    setCaptcha(createCaptcha());
    setCaptchaInput("");
  };

  const submitContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const captchaAnswer = String(formData.get("captcha") ?? "").trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in your name, email, subject, and message.");
      return;
    }

    if (captchaAnswer !== String(captcha.answer)) {
      toast.error("Captcha is incorrect. Try again.");
      setCaptchaInput("");
      setCaptcha(createCaptcha());
      return;
    }

    setSending(true);

    const body = [`Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", message].join(
      "\n",
    );

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Hire me: ${subject}`)}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your mail client.");
    setSending(false);
    setOpen(false);
    resetForm();
  };

  return (
    <section id="contact" className="border-b border-hairline bg-background text-foreground">
      <div className="mx-auto grid max-w-350 grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-32">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-accent">
            008 — Contact
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-6xl font-bold leading-[0.9] md:text-7xl">
            Looking for
            <br />
            <span className="italic opacity-70">a developer?</span>
          </h2>
          <p className="mt-8 max-w-lg text-base text-foreground/70">
            Open to full-stack roles, engineering collaborations, projects and internships. Use the
            button below to open a quick message form.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Dialog
              open={open}
              onOpenChange={(value) => {
                setOpen(value);
                if (!value) resetForm();
              }}
            >
              <DialogTrigger asChild>
                <button className="inline-flex items-center gap-3 border border-foreground bg-foreground px-5 py-3.5 font-mono-tech text-xs uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground">
                  <MessageSquareText className="h-4 w-4" />
                  Hire me
                </button>
              </DialogTrigger>
              <DialogContent className="border-foreground/20 bg-background text-foreground sm:max-w-2xl">
                <DialogHeader className="text-left sm:text-left">
                  <DialogTitle className="font-display text-3xl md:text-4xl">
                    Send a message
                  </DialogTitle>
                </DialogHeader>

                <form onSubmit={submitContactForm} className="mt-2 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Your name" name="name" placeholder="Arpan" />
                    <Field
                      label="Email address"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                    />
                  </div>
                  <Field
                    label="Subject"
                    name="subject"
                    placeholder="Full-stack role, collaboration, freelance project"
                  />
                  <div>
                    <label className="mb-2 block font-mono-tech text-[10px] uppercase tracking-widest text-foreground/60">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Share the context, timeline, and what success looks like."
                      className="w-full rounded-none border border-foreground/20 bg-foreground/5 px-4 py-3 font-sans text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-accent focus:bg-foreground/10"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-3 border border-foreground bg-foreground px-5 py-3.5 font-mono-tech text-xs uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground disabled:cursor-wait disabled:opacity-70"
                    >
                      <Mail className="h-4 w-4" />
                      {sending ? "Opening mail client" : "Send message"}
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="col-span-12 flex flex-col justify-end gap-6 border-t border-foreground/10 pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div>
            <p className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/60">
              / Elsewhere
            </p>
            <ul className="mt-4 space-y-2 font-mono-tech text-sm">
              <ContactLink
                href="https://github.com/arpansarkar112"
                label="GitHub / arpansarkar112"
                Icon={Github}
              />
              <ContactLink
                href="https://www.linkedin.com/in/arpan-sarkar00"
                label="LinkedIn / arpan-sarkar00"
                Icon={Linkedin}
              />
              <ContactLink
                href="https://www.facebook.com/arpan.user"
                label="Facebook / arpan.user"
                Icon={Facebook}
              />
              <ContactLink
                href="https://discord.com/users/arpan0418"
                label="Discord / arpan0418"
                Icon={DiscordIcon}
              />
              <ContactLink href={`mailto:${EMAIL}`} label="Mail / arpansarkar112" Icon={Mail} />
              <ContactLink href={`tel:${PHONE}`} label={`Phone / ${PHONE}`} Icon={Phone} />
            </ul>
          </div>
          <div>
            <p className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/60">
              / Location
            </p>
            <p className="mt-3 font-display text-xl">Helsinki, Finland — UTC +3:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono-tech text-[10px] uppercase tracking-widest text-foreground/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="w-full rounded-none border border-foreground/20 bg-foreground/5 px-4 py-3 font-sans text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-accent focus:bg-foreground/10"
      />
    </div>
  );
}

function createCaptcha() {
  const first = Math.floor(Math.random() * 8) + 2;
  const second = Math.floor(Math.random() * 8) + 2;
  return {
    prompt: `${first} + ${second} = ?`,
    answer: first + second,
  };
}

function ContactLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between gap-3 border-b border-foreground/10 py-2 transition hover:border-accent hover:text-accent"
      >
        <span className="flex items-center gap-3">
          <Icon className="h-4 w-4" />
          {label}
        </span>
        <span className="opacity-0 transition group-hover:opacity-100">→</span>
      </a>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto grid max-w-350 grid-cols-12 items-center gap-4 px-6 py-8 md:px-10">
        <div className="col-span-12 flex items-center gap-3 md:col-span-4">
          <div className="flex h-7 w-7 items-center justify-center border border-foreground bg-foreground font-display text-xs font-bold text-background">
            A
          </div>
          <span className="font-mono-tech text-[11px] uppercase tracking-widest text-muted-foreground">
            © {year} Arpan Sarkar
          </span>
        </div>
        <div className="col-span-12 flex items-center justify-end gap-2 text-right font-mono-tech text-[11px] uppercase tracking-widest text-muted-foreground md:col-span-4 md:col-start-9">
          <span className="h-1.5 w-1.5 animate-pulse-dot bg-emerald-500" />
          Live · v2026.1
        </div>
      </div>
    </footer>
  );
}
