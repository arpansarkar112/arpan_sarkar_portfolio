import { useState, type FormEvent } from "react";
import {
  PiGithubLogo,
  PiLinkedinLogo,
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiPhone,
  PiDiscordLogo,
  PiArrowUpRight,
  PiCheck,
} from "react-icons/pi";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/Reveal";
import { submitContactFormAction } from "@/server/contact";

const EMAIL = "arpansarkar112@gmail.com";
const PHONE = "+358403286143";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  form?: string;
};

export function Contact() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedTo, setSubmittedTo] = useState<string | null>(null);

  const validate = (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): FormErrors => {
    const next: FormErrors = {};
    if (!data.name) {
      next.name = "Enter your name so Arpan knows who is reaching out.";
    }
    if (!data.email) {
      next.email = "Enter an email address where Arpan can reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email address such as name@company.com.";
    }
    if (!data.subject) {
      next.subject = "Add a brief subject for your inquiry.";
    }
    if (!data.message) {
      next.message = "Share a few details about the role, project, or timeline.";
    }
    return next;
  };

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;

    const formData = new FormData(formEl);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const validationErrors = validate({ name, email, subject, message });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSending(true);

    try {
      await submitContactFormAction({
        data: { name, email, subject, message },
      });
      setSubmittedTo(email);
      formEl.reset();
      toast.success(`Inquiry sent to Arpan. A reply will go to ${email}.`);
    } catch (error) {
      console.error(error);
      setErrors({
        form: `We could not deliver your message right now. Email ${EMAIL} directly or try again.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-hairline bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left column: Heading + Inline Contact Form */}
            <div className="lg:col-span-7">
              <p className="font-mono-tech text-xs font-medium tracking-wider text-accent tabular-nums">
                {t("contact.eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
                {t("contact.title")}
              </h2>
              <p className="mt-4 max-w-[65ch] text-base text-muted-foreground text-pretty">
                {t("contact.availability")}
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
                {submittedTo ? (
                  <div className="py-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone text-accent">
                      <PiCheck className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                      Inquiry delivered to Arpan
                    </h3>
                    <p className="mt-2 max-w-[65ch] text-base text-muted-foreground text-pretty">
                      We saved your message and notified Arpan. Expect a direct
                      reply at{" "}
                      <span className="font-medium text-foreground">
                        {submittedTo}
                      </span>{" "}
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmittedTo(null)}
                      className="mt-6 rounded-lg border border-border bg-stone px-3 py-2 text-sm font-semibold text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={submitContactForm}
                    noValidate
                    className="space-y-6"
                  >
                    {errors.form && (
                      <div
                        role="alert"
                        className="rounded-lg border border-destructive bg-destructive/10 p-4 text-sm text-destructive"
                      >
                        {errors.form}
                      </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                      <Field
                        label={t("contact.nameLabel")}
                        name="name"
                        placeholder="Elena Lindqvist"
                        error={errors.name}
                        onClearError={() =>
                          setErrors((prev) => ({ ...prev, name: undefined }))
                        }
                      />
                      <Field
                        label={t("contact.emailLabel")}
                        name="email"
                        type="email"
                        placeholder="elena@nordicsystems.fi"
                        error={errors.email}
                        onClearError={() =>
                          setErrors((prev) => ({ ...prev, email: undefined }))
                        }
                      />
                    </div>

                    <Field
                      label="Subject"
                      name="subject"
                      placeholder="Full stack engineering role or system architecture project"
                      error={errors.subject}
                      onClearError={() =>
                        setErrors((prev) => ({ ...prev, subject: undefined }))
                      }
                    />

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block font-mono-tech text-xs font-medium text-muted-foreground"
                      >
                        {t("contact.messageLabel")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        onChange={() =>
                          setErrors((prev) => ({ ...prev, message: undefined }))
                        }
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        placeholder="Share the role scope, technical stack, and target timeline."
                        className={`w-full rounded-lg border bg-stone px-4 py-3 font-sans text-sm text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-muted-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                          errors.message
                            ? "border-destructive"
                            : "border-border focus:border-accent"
                        }`}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          role="alert"
                          className="mt-2 text-xs font-medium text-destructive"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-60"
                      >
                        <PiEnvelopeSimple className="h-4 w-4" />
                        {sending ? t("contact.sending") : t("contact.send")}
                      </button>
                      <span className="font-mono-tech text-xs text-muted-foreground">
                        Direct response within 24 hours
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right column: Direct Channels & Location */}
            <div className="flex flex-col justify-between gap-8 lg:col-span-5 lg:border-l lg:border-hairline lg:pl-10">
              <div>
                <p className="font-mono-tech text-xs font-medium text-accent">
                  Direct channels
                </p>
                <ul className="mt-4 space-y-2 font-mono-tech text-sm">
                  <ContactLink
                    href="https://github.com/arpansarkar112"
                    label="GitHub · arpansarkar112"
                    Icon={PiGithubLogo}
                  />
                  <ContactLink
                    href="https://www.linkedin.com/in/arpan-sarkar00"
                    label="LinkedIn · arpan-sarkar00"
                    Icon={PiLinkedinLogo}
                  />
                  <ContactLink
                    href="https://www.facebook.com/arpan.user"
                    label="Facebook · arpan.user"
                    Icon={PiFacebookLogo}
                  />
                  <ContactLink
                    href="https://discord.com/users/arpan0418"
                    label="Discord · arpan0418"
                    Icon={PiDiscordLogo}
                  />
                  <ContactLink
                    href={`mailto:${EMAIL}`}
                    label={`Email · ${EMAIL}`}
                    Icon={PiEnvelopeSimple}
                  />
                  <ContactLink
                    href={`tel:${PHONE}`}
                    label={`Phone · ${PHONE}`}
                    Icon={PiPhone}
                  />
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-stone p-6">
                <p className="font-mono-tech text-xs text-muted-foreground">
                  Base of operations
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {t("contact.location")}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Open to on site, hybrid, and remote engineering teams across
                  Finland and Europe.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  error,
  onClearError,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
  onClearError?: () => void;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono-tech text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={() => onClearError?.()}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-lg border bg-stone px-4 py-3 font-sans text-sm text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-muted-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          error ? "border-destructive" : "border-border focus:border-accent"
        }`}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-xs font-medium text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
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
        className="group flex items-center justify-between gap-3 rounded-lg border-b border-hairline px-2 py-3 text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="flex items-center gap-3 tabular-nums">
          <Icon className="h-4 w-4 text-accent" />
          {label}
        </span>
        <PiArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </a>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground font-display text-xs font-bold text-background">
            A
          </div>
          <span className="font-mono-tech text-xs text-muted-foreground tabular-nums">
            © {year} Arpan Sarkar · All rights reserved
          </span>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
        >
          <a
            href="/#work"
            className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="/#skills"
            className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground"
          >
            Skills
          </a>
          <a
            href="/#publications"
            className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground"
          >
            Thesis
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Privacy%20Inquiry`}
            className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground"
          >
            Privacy policy
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Terms%20of%20Use`}
            className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground"
          >
            Terms of use
          </a>
        </nav>

        <div className="flex items-center gap-2 font-mono-tech text-xs text-muted-foreground tabular-nums">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          Live · v2026.2
        </div>
      </div>
    </footer>
  );
}
