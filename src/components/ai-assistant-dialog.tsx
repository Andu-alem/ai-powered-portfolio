"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Sparkles } from "lucide-react"

const CONVERSATION_STARTERS = [
  "What technologies do you specialize in?",
  "Tell me about intereting projects you have worked on",
  "What's your development experience?",
  "How can I get in touch with you?",
  "What makes you passionate about coding?",
]

export function AIAssistantDialog() {
    const [open, setOpen] = useState(false)
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
        initialMessages: [
        {
            id: "welcome",
            role: "assistant",
            content:
            "👋 Hi there! I'm here to help you learn more about Andualem. I can tell you about his skills, projects, experience, and more. What would you like to know?",
        },
        ],
    })

        useEffect(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, [messages]);


    const handleQuickReply = (message: string) => {
        if (isLoading) return
        append({ role: "user", content: message })
    }

    const showSuggestions = messages.length <= 1 && !isLoading

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="fixed bottom-6 right-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Ask AI
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] h-[94vh] flex flex-col">
                <DialogHeader className="border-b pb-4">
                    <DialogTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span>Andi&apos;s Assistant</span>
                            <span className="text-xs text-muted-foreground font-normal">Powered by Gemini</span>
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="flex-1 pr-4 py-4 h-[93%]">
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                    <div className="flex-shrink-0 mt-1">
                                        {message.role === "user" ? (
                                            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                                                <User className="h-3 w-3 text-primary-foreground" />
                                            </div>
                                        ) : (
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                                <Bot className="h-3 w-3 text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                                            message.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-br-md"
                                                : "bg-muted rounded-bl-md"
                                        }`}
                                    >
                                        {
                                            message.parts.map((part, i) => {
                                                switch (part.type) {
                                                    case 'text':
                                                        return <div key={i} className="whitespace-pre-wrap">{ part.text }</div>
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-3 justify-start">
                                <div className="flex gap-3">
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mt-1">
                                        <Bot className="h-3 w-3 text-white" />
                                    </div>
                                    <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s] opacity-60"></div>
                                                <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s] opacity-80"></div>
                                                <div className="w-2 h-2 bg-current rounded-full animate-bounce opacity-60"></div>
                                            </div>
                                            <span className="text-xs text-muted-foreground">AI is typing...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Conversation Starters */}
                        {showSuggestions && (
                            <div className="space-y-3 pt-2">
                                <p className="text-xs text-muted-foreground text-center">💡 Try asking:</p>
                                <div className="grid gap-2">
                                    {CONVERSATION_STARTERS.map((starter, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            className="justify-start text-left h-auto py-2 px-3 text-xs hover:bg-muted/50 transition-colors bg-transparent"
                                            aria-label="Send message"
                                            onClick={() => handleQuickReply(starter)}
                                            disabled={isLoading}
                                        >
                                            {starter}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>
                </ScrollArea>

                <div className="border-t pt-4">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <div className="flex-1 relative">
                            <Input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Ask me anything about this developer..."
                                disabled={isLoading}
                                className="pr-12 rounded-full border-2 focus:border-primary/50"
                            />
                            <Button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                size="sm"
                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 p-0"
                            >
                                <Send className="h-3 w-3" />
                            </Button>
                        </div>
                    </form>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                        Press Enter to send • AI responses may take a moment
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
