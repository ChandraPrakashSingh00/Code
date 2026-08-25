import React, { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  X,
  Minimize2,
  User,
  Sparkles,
  Loader2,
  Phone,
} from "lucide-react";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hi 👋 Welcome to CodeCPS Technologies! How can I help you today?",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /*
  ============================================================
    AUTO SCROLL
  ============================================================
  */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  /*
  ============================================================
    FOCUS INPUT WHEN CHAT OPENS
  ============================================================
  */

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  /*
  ============================================================
    SEND MESSAGE
  ============================================================
  */

  const sendMessage = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: trimmedMessage,
    };

    const history = messages.map((item) => ({
      role: item.role,
      text: item.text,
    }));

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/chat`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: trimmedMessage,
            history: history,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        text: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI Assistant Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text:
            "Sorry 😔 I'm unable to connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  /*
  ============================================================
    WHATSAPP
  ============================================================
  */

  const openWhatsApp = () => {
    const whatsappNumber = "918920480415";

    const conversation = messages
      .map((item) => {
        const sender =
          item.role === "user" ? "Customer" : "AI Assistant";

        return `${sender}: ${item.text}`;
      })
      .join("\n\n");

    const whatsappMessage = `Hello CodeCPS Technologies,

I would like to continue my conversation with your team.

Here is my AI Assistant conversation:

${conversation}

Please help me with my requirement.

Thank you.`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /*
  ============================================================
    ENTER KEY
  ============================================================
  */

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  };

  /*
  ============================================================
    QUICK QUESTIONS
  ============================================================
  */

  const quickQuestions = [
    "What services do you offer?",
    "I need a website",
    "I need a mobile app",
  ];

  /*
  ============================================================
    QUICK QUESTION HANDLER
  ============================================================
  */

  const handleQuickQuestion = (question) => {
    setMessage(question);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-24
            right-4
            z-[9999]
            flex
            h-[min(650px,calc(100vh-120px))]
            w-[calc(100vw-32px)]
            max-w-[390px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(15,23,42,0.22)]
            sm:right-6
            sm:w-[390px]
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              bg-[#086FFD]
              px-4
              py-4
              text-white
            "
          >
            <div className="flex items-center gap-3">
              {/* Bot Icon */}

              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  ring-1
                  ring-white/20
                "
              >
                <Bot size={23} strokeWidth={2} />

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-[#086FFD]
                    bg-green-400
                  "
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold">
                    AI Assistant
                  </h3>

                  <Sparkles size={14} />
                </div>

                <p className="mt-0.5 text-xs text-white/75">
                  CodeCPS Technologies
                </p>
              </div>
            </div>

            {/* Header Buttons */}

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Minimize AI assistant"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  text-white/80
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Minimize2 size={17} />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close AI assistant"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  text-white/80
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* =================================================
              CHAT BODY
          ================================================= */}

          <div
            className="
              flex-1
              overflow-y-auto
              bg-slate-50
              px-3
              py-4
              sm:px-4
            "
          >
            {/* QUICK QUESTIONS */}

            {messages.length === 1 && (
              <div className="mb-5">
                <p
                  className="
                    mb-3
                    px-1
                    text-xs
                    font-medium
                    text-slate-500
                  "
                >
                  Quick questions
                </p>

                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() =>
                        handleQuickQuestion(question)
                      }
                      className="
                        rounded-full
                        border
                        border-[#086FFD]/20
                        bg-white
                        px-3
                        py-2
                        text-left
                        text-xs
                        font-medium
                        text-[#086FFD]
                        shadow-sm
                        transition-all
                        duration-200
                        hover:border-[#086FFD]
                        hover:bg-[#086FFD]
                        hover:text-white
                      "
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* MESSAGES */}

            <div className="space-y-4">
              {messages.map((item) => {
                const isUser = item.role === "user";

                return (
                  <div
                    key={item.id}
                    className={`flex items-end gap-2 ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {!isUser && (
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#086FFD]/10
                          text-[#086FFD]
                        "
                      >
                        <Bot size={16} />
                      </div>
                    )}

                    <div
                      className={`
                        max-w-[78%]
                        whitespace-pre-wrap
                        rounded-2xl
                        px-3.5
                        py-2.5
                        text-sm
                        leading-5
                        ${
                          isUser
                            ? "rounded-br-md bg-[#086FFD] text-white"
                            : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                        }
                      `}
                    >
                      {item.text}
                    </div>

                    {isUser && (
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-slate-200
                          text-slate-600
                        "
                      >
                        <User size={16} />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* LOADING */}

              {isLoading && (
                <div className="flex items-end gap-2">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#086FFD]/10
                      text-[#086FFD]
                    "
                  >
                    <Bot size={16} />
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-2xl
                      rounded-bl-md
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      shadow-sm
                    "
                  >
                    <Loader2
                      size={15}
                      className="animate-spin text-[#086FFD]"
                    />

                    <span className="text-xs text-slate-500">
                      Thinking...
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* =================================================
              INPUT AREA
          ================================================= */}

          <div
            className="
              shrink-0
              border-t
              border-slate-200
              bg-white
              p-3
            "
          >
            {/* WHATSAPP BUTTON */}

            <button
              type="button"
              onClick={openWhatsApp}
              className="
                mb-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#25D366]
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#20bd5a]
                hover:shadow-md
                active:scale-[0.98]
              "
            >
              <Phone size={16} strokeWidth={2.2} />

              Continue on WhatsApp
            </button>

            {/* MESSAGE INPUT */}

            <div
              className="
                flex
                items-end
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-1.5
                transition
                focus-within:border-[#086FFD]/40
                focus-within:ring-2
                focus-within:ring-[#086FFD]/10
              "
            >
              <textarea
                ref={inputRef}
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                rows={1}
                maxLength={2000}
                placeholder="Type your message..."
                className="
                  max-h-24
                  min-h-[40px]
                  flex-1
                  resize-none
                  bg-transparent
                  px-2
                  py-2.5
                  text-sm
                  text-slate-800
                  outline-none
                  placeholder:text-slate-400
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={!message.trim() || isLoading}
                aria-label="Send message"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#086FFD]
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#075ed6]
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:bg-slate-300
                "
              >
                <Send size={17} strokeWidth={2} />
              </button>
            </div>

            <p
              className="
                mt-2
                text-center
                text-[10px]
                text-slate-400
              "
            >
              AI Assistant • CodeCPS Technologies
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          FLOATING BUTTON
      ===================================================== */}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
          className="
            fixed
            bottom-5
            right-5
            z-[9999]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#086FFD]
            text-white
            shadow-[0_12px_35px_rgba(8,111,253,0.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#075ed6]
            hover:shadow-[0_16px_40px_rgba(8,111,253,0.42)]
            active:scale-95
            sm:bottom-6
            sm:right-6
          "
        >
          {/* AI BOT ICON */}

          <Bot
            size={25}
            strokeWidth={2}
          />

          {/* Online Dot */}

          <span
            className="
              absolute
              right-0
              top-0
              h-4
              w-4
              rounded-full
              border-[3px]
              border-white
              bg-green-500
            "
          />

          {/* Ping */}

          <span
            className="
              absolute
              inset-0
              -z-10
              animate-ping
              rounded-full
              bg-[#086FFD]/30
            "
          />
        </button>
      )}
    </>
  );
}

export default AIAssistant;