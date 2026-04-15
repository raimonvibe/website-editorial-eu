'use client'
import { useEffect } from 'react'

export default function PrayerChatWidget() {
  useEffect(() => {
    const embedCode = 'prayer-chat-bot-0SDJw3_MlyH64vtAEl7I2bnr';
    const baseUrl = 'https://chatbot-java-spring-ai.onrender.com';
    const script = document.createElement('script');
    script.src = baseUrl + '/js/chatbot-widget.js';
    script.async = true;
    script.onerror = function() {
      const el = document.getElementById('prayer-chat-chatbot-' + embedCode) || document.querySelector('[data-embed-code="' + embedCode + '"]');
      if (el) el.innerHTML = '<p style="padding:12px;background:#fff3cd;border:1px solid #ffc107;border-radius:8px;font-family:sans-serif;font-size:14px;">Chat could not load. Check browser console (F12) or Content-Security-Policy.</p>';
    };
    script.onload = function() {
      if (typeof (window as any).PrayerChat !== 'undefined' && (window as any).PrayerChat.init) {
        (window as any).PrayerChat.init({ embedCode, apiUrl: baseUrl + '/api' });
      } else {
        const el = document.getElementById('prayer-chat-chatbot-' + embedCode) || document.querySelector('[data-embed-code="' + embedCode + '"]');
        if (el) el.innerHTML = '<p style="padding:12px;background:#f8d7da;border:1px solid #f5c6cb;border-radius:8px;font-family:sans-serif;font-size:14px;">Chat failed to start. Open console (F12) for details.</p>';
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="prayer-chat-chatbot-prayer-chat-bot-0SDJw3_MlyH64vtAEl7I2bnr"
      data-embed-code="prayer-chat-bot-0SDJw3_MlyH64vtAEl7I2bnr"
      suppressHydrationWarning={true}
    />
  );
}
