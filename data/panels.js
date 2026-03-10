// Panel content (exercise + deepDive per lesson id). Edit here to add panel text.
window.PANEL_BY_ID = {
  "rule-of-thirds-01": {
    exercise: {
      title: "Center vs thirds.",
      kind: "imageText",
      imageSrc: "assets/composition-rules.webp",
      bullets: [
        "Pick one subject and a clean background.",
        "Take one photo with the subject centered.",
        "Take one photo with the subject on a thirds intersection.",
        "Same lens. Same distance.",
      ],
      reflection: "The centered image should feel stable and finished. The thirds image should feel lighter and more intentional. Do you feel a difference?",
    },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "The rule", p: "This is the first composition rule everyone learns." },
        { h: "Examples", p: "Bird on a stick. Flower against blur. Subject on an intersection." },
        { h: "Why it works", p: "It works because it is readable. The subject gets weight. The frame gets air." },
        { h: "Overused", p: "That is also why it is overused. Thirds are safe. Predictable." },
        { h: "When to use", p: "Use it when clarity matters. Then move on. There are stronger tools once this feels obvious." },
      ],
    },
  },
  contrejour: {
    exercise: {
      kind: "imageText",
      imageSrc: "assets/contrejour.webp",
      bullets: [
        "Put a light source behind the subject (window, lamp, sun).",
        "Expose for highlights. Keep the subject dark on purpose.",
        "Add a small bounce (white wall/paper) until you get a clean rim edge.",
      ],
    },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Highlight discipline", p: "Contre-jour is not \"underexpose everything\". It's highlight discipline." },
        { h: "Protect the edge", p: "You protect the bright edge and let the subject become shape." },
        { h: "Adding detail", p: "If you need detail in the subject, don't lift exposure first. Add fill (bounce) or move the subject until the rim is clean." },
      ],
    },
  },
  road: {
    exercise: {
      kind: "text",
      sections: [
        { h: "Find the line", p: "Go looking for a single strong line: roads, paths, tracks, bridges, corridors." },
        { h: "Strengthen it", p: "Move your feet. Try small position changes until the line feels clean and uninterrupted." },
        { h: "Give it a destination", p: "Make sure the line leads somewhere specific: a subject, a doorway, a bright patch, a vanishing point." },
      ],
      reflection: "If the eye knows where to go, the photo feels effortless.",
    },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Why leading lines work", p: "Strong lines give the eye a job. They reduce confusion and guide attention through the image instead of letting it wander." },
        { h: "Symmetry and balance", p: "When both sides of the frame agree, the image feels intentional and calm — even in busy scenes." },
        { h: "Change your position", p: "Leading lines become more interesting when you move. Bend your knees. Shoot high, then low. Step closer. Step back. Small changes can completely change how the lines interact." },
        { h: "Lens choice matters", p: "Wide lenses exaggerate lines and create drama. Telephoto lenses compress them and make the image more graphic. This is one of the most rewarding composition tools there is. When it clicks, images often look strong straight out of camera." },
      ],
    },
  },
  "horizon-upper-third": {
    exercise: {
      title: "Classic Horizon Placement",
      kind: "imageText",
      imageSrc: "assets/landscape-cover.webp",
      bullets: [
        "Turn on the grid.",
        "Place the horizon on the upper third. Take the shot.",
        "Optional (recommended): Take one frame with the horizon centered. Take one frame with the horizon too high.",
        "Now compare.",
        "Ask yourself: Which one feels stable? Which one feels 'correct' without trying too hard? Which one would you trust in a client job?",
      ],
      reflection: "If you can't tell the difference yet, that's fine. Your eye will catch up fast.",
    },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Where horizon goes", p: "Where you place the horizon decides what the image is about." },
        { h: "Upper third", p: "You give visual weight to the land. The image feels grounded and calm." },
        { h: "Lower third", p: "You give weight to the sky. More drama. More mood. More weather." },
        { h: "Center", p: "No side wins. That can feel boring — or perfectly balanced." },
        { h: "Reflections", p: "This is why reflections often work best with a centered horizon. The image becomes symmetrical. Balance is the point." },
        { h: "Choosing", p: "A centered horizon isn't wrong. It's just neutral." },
        { h: "Commit", p: "Many images fail because they don't choose. They don't commit to land or sky. Good composition is often just this: Decide what matters. Give it the weight." },
      ],
    },
  },
  "horizon-lower-third": {
    exercise: {
      title: "Try to shoot a dramatic sky.",
      kind: "imageText",
      imageSrc: "assets/landscape-cover.webp",
      bullets: [
        "Turn on the grid.",
        "Find a dramatic sky. Clouds. Weather. Light. Movement.",
        "Now shoot two frames: One with the horizon high. One with the horizon low (lower third).",
        "Don't adjust anything else. Compare.",
        "Ask yourself: Which one feels more dramatic? Which one pulls your eye upward? Which one actually uses the sky?",
      ],
      reflection: "If the difference is obvious, good. If it isn't — your sky wasn't strong enough.",
    },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Sky as subject", p: "Lower third horizon shifts attention upward. You're saying: \"This image is about the sky.\"" },
        { h: "What the sky needs", p: "That works when the sky has: Shape (clouds). Direction (storm, movement). Light (breaks, rays, contrast). Color (sunset, cold blues, heavy greys)." },
        { h: "Weather and tension", p: "Storm clouds and bad weather add tension. They make the frame feel alive." },
        { h: "Clear sky", p: "A clear blue sky is different. It can work — but the message changes." },
        { h: "Calm instead of drama", p: "Clear sky means freedom, openness, emptiness. Calm instead of drama." },
        { h: "Focus", p: "If the sky has nothing to say, don't give it the stage. Composition isn't about rules. It's about focus. Decide what matters. Then give it the space." },
      ],
    },
  },
  "dummy-lesson": {
    exercise: { kind: "text", sections: [{ h: "Övning", p: "dummy övning" }] },
    deepDive: { variant: "longform", sections: [{ h: "Deep dive", p: "dummy deep dive" }] },
  },
  "references-intro": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Before the camera", p: "Great photos start long before you raise the camera. They start with a direction — something you're looking for, a mood, a composition, a moment you've seen in your head or in someone else's work." },
        { h: "What this block is for", p: "References and inspiration are the map. They tell you where to look, what to save, and how to turn an idea into a real shot. Master this first and the rest of the course makes more sense." },
      ],
    },
  },
  "every-shot-idea": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "The common thread", p: "The photographers who shoot consistently don't rely on luck or gear. They know what they're looking for. That clarity is what separates a scattered feed from a body of work." },
        { h: "Ideas are choices", p: "An idea doesn't have to be elaborate. It can be simple: a type of light, a pose, a colour, a moment. The point is that you have one. Without it, you're just hoping something appears." },
      ],
    },
  },
  "find-plan-shoot": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "The sequence", p: "Find inspiration somewhere you can trust. Save it in a way you can use. Then plan the shot — location, time, subject, light — and go shoot it. That loop is the engine." },
        { h: "What comes next", p: "The next chapters cover where to find inspiration (social, portfolios, competitions, masters), how to save and structure it, and how to turn it into a concrete plan." },
      ],
    },
  },
  "why-shooting": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Many reasons", p: "People shoot for fun, for memory, for social media, for competition, for clients. There's no single right reason. But knowing yours shapes what you look for and how seriously you invest." },
        { h: "Sharpens everything", p: "If you're shooting for yourself, you can ignore trends. If you're building a portfolio, you need consistency. If you're competing, you need to study winners. Your reason decides your strategy." },
      ],
    },
  },
  "what-looking-for": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) WHAT YOU'RE WORKING TOWARD", p: "Finding the right inspiration starts with knowing what you're working toward. A single shot, a project, or your style over time changes what you look for and where you look." },
        { h: "2) MATCH THE SOURCE TO THE GOAL", p: "Single-shot ideas often come from feeds and mood boards, while projects need deeper references and maybe masters in one genre. Style emerges from repeated influence, not one-off pins." },
      ],
    },
  },
  "single-shot": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) WHERE IT STARTS", p: "Most photographs begin with one idea: one frame, one subject, one moment. It can be a portrait, a place, a detail, or a small creative experiment." },
        { h: "2) WHAT MAKES A GOOD SINGLE SHOT", p: "Strong single images are built around one dominant element - one subject, one light, one mood. When too many ideas compete, the image weakens." },
        { h: "3) FINDING REFERENCES", p: "Single-shot ideas often come from feeds, mood boards, or photographers you follow. Save references with a short note about what to adapt - a lighting setup, a composition, a pose, or a color mood." },
        { h: "4) PRACTICE", p: "Single shots are the fastest way to improve because you can test a new angle, light, or framing in minutes. Repeated small experiments build visual instinct." },
      ],
    },
  },
  "photo-project": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) WHAT A PROJECT IS", p: "A project is a group of photographs connected by one idea - a place, a subject, a question, or a visual approach. Instead of chasing one strong image, you explore one direction across many frames." },
        { h: "2) THINK IN SERIES", p: "Good projects are built from repetition: the same subject, place, light, or question. Each image adds something new while still belonging to the same visual world." },
        { h: "3) FINDING PROJECT REFERENCES", p: "Look for photographers who stay with one idea over time and study how they vary distance, moment, and composition while keeping the core idea intact. The goal is a set of images that belong together." },
        { h: "4) PRACTICE", p: "Start small and shoot one simple theme repeatedly - ten images of the same place, ten portraits with the same light, or ten variations of one idea. Projects grow through repetition." },
      ],
    },
  },
  "scroll-for-ideas": {
    exercise: { kind: "text", sections: [{ h: "Test exercise", p: "Use this to test navigation and panels." }] },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Same platforms, different use", p: "The same platforms you use to socialise are among the best sources for photo inspiration — if you use them with intention. That means teaching the algorithm what you want and searching instead of only scrolling." },
        { h: "Control the feed", p: "Use Search for specific styles and moods. Curate aggressively: mark irrelevant content 'Not interested'. Within a week your feed can become a focused inspiration source instead of noise." },
      ],
    },
  },
  "portfolio-websites-intro": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Finished work and curation", p: "Portfolio and photo-community sites show finished work and curated bodies of work. Use them when you want to study presentation and technical finish — not just single images in a feed." },
        { h: "When to use them", p: "When you need to see how a complete image holds up — tone, colour, retouching, composition — and how photographers structure a set or a page. Different from social: slower, more intentional." },
      ],
    },
  },
  "photo-style": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) HOW STYLE APPEARS", p: "A photographic style rarely starts as a plan. It appears gradually through repetition - the subjects you return to, the light you prefer, the distance you keep, and the way you frame." },
        { h: "2) RECOGNIZABLE PATTERNS", p: "When style begins to form, patterns appear: similar light, similar distance, similar mood, and similar subjects. Over time, viewers start recognizing the images as yours." },
        { h: "3) STUDYING STYLE", p: "Study photographers with a clear visual language and review many images from the same person. Ask: What light do they prefer? How close do they stand? What scenes return again and again?" },
        { h: "4) PRACTICE", p: "Style is not something you force. It grows from doing the same kind of work repeatedly, and your preferences become visible through consistent practice." },
      ],
    },
  },
  "instagram-social": {
    exercise: { kind: "text", sections: [{ h: "Test exercise", p: "Use this to test navigation and panels." }] },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "How the algorithm works", p: "Instagram's algorithm shows you more of what you engage with — which means left alone, it shows you everything. Two ways to take control." },
        { h: "First: use Search", p: "Type a style, a mood, a genre — 'moody portrait photography', 'minimalist street photo' — and you bypass the social feed entirely." },
        { h: "Second: curate aggressively", p: "When something irrelevant appears, mark it 'Not interested.' Do this consistently for a week and your feed becomes a focused inspiration source. It takes effort once. Then it works on its own." },
      ],
    },
  },
  "pinterest-social": {
    exercise: { kind: "text", sections: [{ h: "Test exercise", p: "Use this to test navigation and panels." }] },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "No social noise", p: "Unlike Instagram, Pinterest has no social noise. Search 'red flying dress photoshoot' and you get exactly that — thousands of images, ranked by relevance, not recency." },
        { h: "Boards and save", p: "Use Boards to build mood boards by project, genre or style. Save images directly to your phone or computer." },
        { h: "Weakness and strength", p: "The weakness: sources are often uncredited, so tracing the original photographer takes extra work. The strength: a great photo from 2012 sits next to one from this week. Quality surfaces regardless of when it was made." },
      ],
    },
  },
  "youtube-social": {
    exercise: { kind: "text", sections: [{ h: "Test exercise", p: "Use this to test navigation and panels." }] },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Result vs process", p: "Most inspiration platforms show you the result. YouTube shows you the process — behind the scenes, photowalks, shot breakdowns, gear in real conditions. This is where you understand why a photo looks the way it does, not just that it does." },
        { h: "How to use it", p: "Search a photographer you admire and add 'behind the scenes' or 'photowalk'." },
        { h: "The gap closes", p: "The gap between seeing a great image and understanding how to make one closes faster here than anywhere else." },
      ],
    },
  },
  "kanaler-intro": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Varför detta finns", p: "En idé är inte en känsla. En idé är ett val som går att återupprepa." },
        { h: "Fem typer av källor", p: "Flöden: vad som syns nu. Arkiv: vad som finns i bredd. Sök: vad som redan är gjort. Kartor: var bilder faktiskt tas. Ljusappar: när bilden går att ta." },
        { h: "Vad som ska komma ut", p: "1) Referenser som går att beskriva med ord. 2) En plats, en tid, en riktning. 3) En plan som går att genomföra." },
      ],
    },
  },
  "instagram-kuraterat": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Styrkan", p: "Instagram är snabbast när du vill scanna \"vad folk gör\" i en stil just nu." },
        { h: "Så får man värde", p: "Följ konton med tydliga val, inte bara snyggt resultat. Spara bara sånt som går att döpa: \"motljus-silhuett\", \"färgblock\", \"lager\", \"ren separation\"." },
        { h: "Vanligt misstag", p: "Spara för mycket och kalla det research. Då blir det bara ett nytt flöde." },
        { h: "Output", p: "En liten lista: 10 bilder som kan översättas till en plan." },
      ],
    },
  },
  "35-awards": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What it is", p: "35Awards runs annual categories with shorter thematic challenges alongside, and the standard is genuinely high." },
        { h: "Why it is useful", p: "Use it as a reference library: search past winners in your genre and study what separates them — technically strong, emotionally clear, intentional." },
        { h: "How to use it", p: "Look at what holds up across years and trends. The winners show you what survives comparison, not just what looks good alone in a feed." },
        { h: "Output", p: "A concrete benchmark for what \"strong\" looks like in your chosen genre." },
      ],
    },
  },
  "photo-competitions-intro": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Why competitions matter", p: "Looking at winning images across genres is one of the fastest ways to calibrate your eye. You start to recognise patterns — what judges reward, what audiences respond to, what makes an image stop you mid-scroll." },
        { h: "Pressure as a tool", p: "Beyond inspiration, competitions give you a reason to shoot: a theme, a deadline, a standard to measure yourself against. That pressure is often exactly what moves you forward." },
      ],
    },
  },
  "study-the-best": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) WHY STUDY MASTERS", p: "Great photographs rarely happen by accident. Behind them are decisions - composition, light, timing, framing - refined over years of practice. Studying strong photographers makes those decisions visible." },
        { h: "2) WHAT YOU START SEEING", p: "Once you begin studying great work, patterns appear: where the camera is placed, what is included and left out, how light shapes the subject, and why the moment was chosen. These choices guide how the viewer reads the image." },
        { h: "3) THE VALUE", p: "Learning only from your own mistakes takes years. Studying great photographers compresses that learning, and you begin to see solutions that took others decades to develop." },
      ],
    },
  },
  "inspiration-vs-influence": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) TWO DIFFERENT THINGS", p: "Inspiration and influence are not the same. Inspiration is immediate - a location, a pose, a colour palette. Influence is slower and shapes how you see photographs." },
        { h: "2) HOW INFLUENCE FORMS", p: "Influence appears when you spend time with a photographer's work and keep noticing the same decisions: composition, light, distance, timing. Gradually those patterns affect how you see and shoot." },
        { h: "3) WHY IT MATTERS", p: "One inspiring photo might lead to one shoot, but influence shapes many images. That's how visual language develops." },
      ],
    },
  },
  "generalist-vs-specialist": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) GENERALISTS", p: "Many photographers try everything - street, portraits, landscape, documentary. This is useful in the beginning, because it helps you explore what actually interests you." },
        { h: "2) SPECIALISTS", p: "Most renowned photographers become known for one thing: one genre, one subject, one approach. They return to the same problems repeatedly until their solutions become refined." },
        { h: "3) WHAT TO STUDY", p: "If you want to understand a genre, study someone who spent years inside it - street for street, portrait for portraits, landscape for landscape. Depth reveals decisions that general work often hides." },
      ],
    },
  },
  "what-makes-renowned": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) RECOGNISABLE VISION", p: "What separates renowned photographers from very good ones is rarely technical skill. It's a point of view that becomes recognisable over time: the subjects they choose, the distance they keep, the light they prefer, and the moments they wait for." },
        { h: "2) CONSISTENCY", p: "When those decisions repeat across many photographs, a visual language appears. You begin recognising the images even before seeing the name - not one strong photo, but a body of work." },
        { h: "3) WHAT TO STUDY", p: "When studying great photographers, look for patterns: what subjects return, what compositions repeat, and what kind of light appears again and again. Those patterns reveal the photographer's thinking." },
      ],
    },
  },
  "how-to-study-photographer": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) LOOK FOR PATTERNS", p: "When studying a photographer, do not focus on one image - look across many and search for repetition. Similar compositions, distance, and light reveal how the photographer sees." },
        { h: "2) COMPOSITION DECISIONS", p: "Study how the frame is organized: subject placement, eye path, and which composition rules are active. Thirds, symmetry, negative space, and leading lines often work together." },
        { h: "3) GESTALT AND VISUAL FLOW", p: "Great photographs guide the viewer's eye through grouping, contrast, isolation, and visual weight. Ask what attracts attention first and how the eye moves through the frame." },
        { h: "4) DISTANCE AND LENS", p: "Distance changes the feeling of the image, from close and immersive to far and observational. Lens perspective adds to that choice, whether wide and involving or compressed and distant." },
        { h: "5) LIGHT AND MOMENT", p: "Look at light direction, contrast, and quality to see how the subject is defined. Then ask why the photograph was taken at that exact moment, because timing often completes the composition." },
        { h: "6) PRACTICE", p: "At first this analysis feels slow, but repetition makes it faster. Over time, you start recognizing strong decisions instinctively." },
      ],
    },
  },
  "find-your-sources": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) START SMALL", p: "You don't need dozens of references. Find two or three photographers in the genre you want to explore - work that genuinely stops you and images you keep returning to." },
        { h: "2) WHY A FEW IS BETTER", p: "Too many influences create noise. A small group makes patterns easier to see: framing, light choices, and subject approach. Depth beats quantity." },
        { h: "3) DIFFERENT VOICES", p: "Choose photographers who pull you in slightly different directions. One might shape composition, another light, another subject or mood - together they create a richer reference point." },
        { h: "4) PRACTICE", p: "Build a small reference set of ten to twenty images per photographer. Study them repeatedly and ask the same questions you've practiced earlier in the course." },
      ],
    },
  },
  "every-genre-masters": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) STREET", p: "Street photography was shaped by Cartier-Bresson's geometry and instinct, Vivian Maier's quiet observation, and Alex Webb's layered colour and complexity." },
        { h: "2) LANDSCAPE AND PORTRAIT", p: "Landscape by Ansel Adams' technical precision and Michael Kenna's minimalism and stillness. Portrait by Avedon's directness, Penn's simplicity, and Leibovitz's intimacy." },
        { h: "3) CONCEPTUAL AND STAGING", p: "Conceptual and staged photography by Gregory Crewdson's cinematic scenes and Paolo Roversi's painterly light." },
        { h: "4) THE MAP", p: "These photographers didn't just work in their genres - they defined what those genres could become. This list is not for memorising; it's a map of where to start exploring." },
      ],
    },
  },
  "composition-rules": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Not laws", p: "Composition rules are not laws — they're shortcuts to understanding how the eye moves through an image. They exist because certain arrangements create tension, balance, or direction that feels natural to the human eye." },
        { h: "Learn them all", p: "Learn them all. Not to follow them, but so you know exactly what you're doing when you break them." },
        { h: "Intention vs accident", p: "A rule broken with intention is a decision. A rule broken by accident is just a bad photo." },
      ],
    },
  },
  "rule-of-thirds-comp": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Why it works", p: "Rule of thirds works because it moves the subject off centre — the eye has somewhere to travel, the image has tension. Learn it, use it, trust it for horizons and simple frames." },
        { h: "When it becomes a ceiling", p: "But if a bird on a stick with the horizon on the lower third is still your idea of a great photo five years in, the rule has become a ceiling." },
        { h: "Study those who break it", p: "The photographers worth studying don't follow the grid — they understand why it exists, which means they know exactly when to break it." },
        { h: "Next level", p: "Diagonals — the lines that enter from the corners carry energy the thirds grid never will. Dynamic symmetry is a more sophisticated grid system built on natural proportions. Use your grid as a tool, not a law." },
      ],
    },
  },
  "leading-lines-comp": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Obvious sources", p: "Roads, bridges, piers, railway tracks, tunnels. These work because they create direction and depth simultaneously." },
        { h: "Less obvious", p: "Branches, cracks in pavement, roots, fence lines, shadows on a wall. Anything with direction can lead the eye if you position yourself correctly." },
        { h: "Height changes everything", p: "Get low and the lines accelerate toward the horizon. Stand tall and they flatten out. Bending your knees and working in height is often the single adjustment that takes a leading lines shot from ordinary to strong." },
        { h: "Genre and reference", p: "Architecture, landscape, street. Fan Ho used leading lines in Hong Kong's narrow streets to create depth and atmosphere in ways that still hold up decades later." },
      ],
    },
  },
  "negative-space-comp": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What it creates", p: "Solitude — a small subject in a vast empty frame. Anticipation — a subject looking into open space. Movement — room to travel into or out of. Scale — emptiness makes subjects feel either small or significant." },
        { h: "Reference", p: "Annie Leibovitz used negative space deliberately in editorial and portrait work — placing subjects off-centre with significant empty surroundings to let the image breathe." },
        { h: "Practical note", p: "Images with significant negative space are valuable for editorial use. Magazines and advertising need room for headlines and text. Shooting with that space intentionally gives the image a second life beyond the standalone photo." },
        { h: "Genre", p: "Portrait, landscape, fine art." },
      ],
    },
  },
  "frame-within-frame": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What to use as frames", p: "Doorways, windows, archways. Overhanging branches, vegetation. Cave openings, tunnel ends. Gaps in architecture or structures." },
        { h: "What it adds", p: "Draws the eye inward toward the subject. Adds a layer of depth flat compositions never achieve. Gives context — a subject framed by a doorway tells you something about the space they inhabit." },
        { h: "Portrait through a window", p: "A portrait through a window adds separation, voyeurism, atmosphere. The frame becomes part of the story." },
        { h: "Genre and reference", p: "Travel, architecture, environmental portrait. Steve McCurry uses natural and architectural frames consistently — subjects inside doorways or windows where the surrounding structure becomes as much a part of the image as the person." },
      ],
    },
  },
  "symmetry-asymmetry": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Symmetry", p: "Creates calm, order, visual satisfaction. Natural territory: architecture, facades, interiors, grand staircases. Reflections on water — the image doubles and the world becomes ordered." },
        { h: "Asymmetry", p: "Two unequal elements balanced against each other. Creates visual tension that keeps the eye moving. Use the Rule of Thirds grid here — elements on different grid lines create asymmetric balance that feels considered, not accidental." },
        { h: "Environmental portrait", p: "In environmental portrait work, symmetry places a subject within a scene so the surroundings frame them evenly — giving the person weight and presence." },
        { h: "Genre and reference", p: "Architecture, landscape, portrait. Wes Anderson's visual language is built almost entirely on perfect symmetry. Study any frame from his films as a composition reference." },
      ],
    },
  },
  "patterns-repetition": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Where to find patterns", p: "Tiles, windows, crowds, shadows. Market stalls, staircases, fences. Urban surfaces, aerial landscapes." },
        { h: "Pattern vs break", p: "A pure pattern image can be strong on its own — satisfying, graphic, complete. But the most interesting pattern shots introduce a break. One element that doesn't repeat." },
        { h: "Examples", p: "A single figure in a crowd of identical suits. One red door in a row of blue ones. The pattern sets up the rule. The break creates the story." },
        { h: "Street", p: "In street photography this happens almost automatically — the city provides the pattern, the human figure provides the interruption. You position yourself against the pattern and wait. Genre: street, architecture, abstract, aerial." },
      ],
    },
  },
  "juxtaposition-comp": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "The brain looks for relationship", p: "The brain immediately looks for a relationship between elements in a frame. When that relationship is unexpected, ironic, or contradictory, the image becomes memorable." },
        { h: "Examples", p: "A luxury billboard above a homeless shelter. An elderly woman on a skateboard. A child playing in the shadow of heavy industry." },
        { h: "Scout vs moment", p: "You can scout locations where juxtaposition is likely — but the moment itself can't be manufactured. You have to recognise it and be in position when it aligns." },
        { h: "Humour", p: "Humour lives here too. Some of the most memorable street photographs are simply funny — not staged, not arranged, just two things in the same frame that have no business being there together. Genre: street, documentary, photojournalism." },
      ],
    },
  },
  "depth-layers": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Depth from separation", p: "Depth comes from separation — foreground, midground, background each holding something worth looking at. When all three are working, the eye moves through the image rather than across it." },
        { h: "How to build it", p: "Get physically low — pull the foreground into the frame. Use wide angle lenses — they exaggerate distance between layers. Find a strong foreground element before you think about the background." },
        { h: "Reference", p: "Alex Webb stacks multiple layers of activity in a single frame — foreground figures, midground action, background context. Images that take several seconds to fully read. Dense but controlled. Each layer adds rather than competes." },
        { h: "Genre", p: "Landscape, travel, street." },
      ],
    },
  },
  "fill-the-frame": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Getting close", p: "Filling the frame means getting close — physically or with a longer lens — until the subject occupies the majority of the image. No dead space, no competing background, no ambiguity about where to look." },
        { h: "Works best when", p: "The subject has texture, expression, or detail that rewards proximity. Context would distract rather than add. You want graphic strength over narrative." },
        { h: "The risk", p: "Too aggressive and the image becomes claustrophobic rather than intimate. The decision is always whether the environment adds or competes." },
        { h: "Genre and reference", p: "Portrait, nature, macro, product. Richard Avedon's portrait work is a masterclass in filling the frame. White background, subject close, nowhere to hide. The technique removes everything except the person." },
      ],
    },
  },
  "how-the-eye-reads": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1). Faces & Eyes", p: "The strongest biological pull in any image." },
        { h: "2). Contrast", p: "Light against dark, almost always top two." },
        { h: "3). Colour", p: "When it breaks from the surrounding environment." },
        { h: "4). Sharpness", p: "The sharpest point reads before softer areas." },
        { h: "5). Size", p: "Larger elements read before smaller, but dependent on contrast." },
        { h: "6). Isolation", p: "A single separated element draws attention." },
        { h: "7). Gaze direction", p: "Eyes in the frame direct where the viewer looks next." },
        { h: "The order shifts", p: "Depending on the image. A landscape with no faces runs a different hierarchy than a portrait. What doesn't change: every unintentional bright spot, every accidental sharp background, every stray colour — the eye finds it before your subject." },
        { h: "Control", p: "Control the hierarchy. Control the image." },
      ],
    },
  },
  "how-to-control-viewer": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Directing the eye", p: "Every element in a frame competes for attention. Visual hierarchy is how you decide who wins. Light, sharpness, colour, faces, size, isolation — tools for directing the eye from the most important element to the next." },
        { h: "Without hierarchy", p: "A photo without hierarchy is a photo the viewer has to work out themselves. Sometimes that's intentional. Usually it's not." },
        { h: "Learn and apply", p: "The cards that follow break down each tool individually. Learn them separately. Apply them together." },
      ],
    },
  },
  "greatest-contrast": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Most powerful, most abused", p: "Used well, contrast pulls the eye directly to the subject. Used carelessly, it sends the eye to a blown-out sky, a bright patch of pavement, or anything that isn't your subject." },
        { h: "How to control it", p: "Place the subject where the background doesn't compete — the real solution; everything else is a workaround. Bokeh, tonal separation, colour separation, physical distance." },
        { h: "Applications", p: "Silhouette — subject in pure shadow against bright sky. Low key portraits: dark surroundings, lit subject. High key: bright surroundings, softer feel. Black and white lives on contrast — Ansel Adams developed his Zone System for absolute tonal control." },
        { h: "Photographers", p: "Ansel Adams built a technical system around it. Fan Ho used deep shadows in Hong Kong's streets to isolate subjects with almost theatrical precision." },
      ],
    },
  },
  "figure-ground": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Subject and background", p: "Figure-ground is the relationship between subject and everything behind it. When it works, the subject reads instantly. When it fails, the subject merges with the background and the image falls apart." },
        { h: "How to control it", p: "Place the subject so the background doesn't distract. Bokeh, tonal separation, colour separation, physical distance." },
        { h: "What to avoid", p: "Trees, poles, or structures appearing to grow from the subject's head. Limbs from others overlapping. Background matching subject tone or colour. Busy backgrounds competing with edges." },
        { h: "Studio vs location", p: "Studio photographers remove the background entirely — Avedon, Penn, Karsh. In location work, the skill is finding or creating separation where it doesn't naturally exist. Genre: portrait, documentary, street." },
      ],
    },
  },
  "similarity-proximity": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Gestalt principle", p: "The brain groups similar or nearby things into units. In photography, the composition is interpreted before the viewer makes any conscious decision." },
        { h: "Practically", p: "A crowd of similarly dressed people reads as a mass. Two subjects close together read as related. Repeating shapes, colours, or sizes create rhythm. Break the similarity with one different element and that element becomes the subject." },
        { h: "Where it applies", p: "Street photography — one figure breaks from a similar group. Documentary and photojournalism — collective identity." },
        { h: "Reference", p: "Andreas Gursky shoots crowds and architectural repetitions at massive scale — the individual disappears into the pattern. Genre: street, documentary, architecture, aerial." },
      ],
    },
  },
  "closure-visual": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "The brain completes", p: "Closure is the brain's tendency to fill in missing information. You can crop aggressively, let subjects exit the frame, show partial forms — and the viewer constructs the rest." },
        { h: "What it looks like", p: "Portrait cropped at forehead and chin — the face still reads complete. Figure walking out of frame — the viewer continues the movement mentally. Hand reaching in from the edge — the body implied." },
        { h: "Intention not accident", p: "Closure is not bad cropping. Cutting awkwardly through ankles or wrists without intention is a mistake. Closure crops deliberately and implies what it removes." },
        { h: "References", p: "Annie Leibovitz used cropped limbs as a recurring element — dynamic rather than accidental. Francesca Woodman used closure extensively — partial figures, incompleteness as the point. Genre: conceptual, portrait, street." },
      ],
    },
  },
  "colour-as-break": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "The colour break", p: "One element in an otherwise neutral scene — a yellow raincoat on a grey street, a red tent in a landscape, a single lit window. The colour needs to be isolated. A human figure in a bright jacket gives scale and focal point." },
        { h: "Colour as dominant", p: "William Eggleston's work is the opposite — images built around a single dominant hue. His 1976 MoMA exhibition proved colour could be as considered and powerful as black and white." },
        { h: "What to avoid", p: "A black and white image with one digitally preserved colour element strips sophistication from both and replaces it with something that looks like a decision but isn't." },
        { h: "Genre", p: "Street, landscape, travel, documentary — anywhere the environment provides natural colour contrast worth waiting for." },
      ],
    },
  },
  "sharpness-visual": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "A compositional decision", p: "Where you place focus determines where the eye goes. Sharpness is a focusing decision — but more importantly, a compositional one." },
        { h: "Portrait", p: "Focus on the eyes — always. If one eye is sharper than the other, the image feels slightly wrong. At very wide apertures, the focus plane can be thin enough that nose and ear are in different zones." },
        { h: "Landscape and breaking the rule", p: "Traditionally everything in focus. Selective focus in landscape creates depth and atmosphere — sharp foreground against soft background pulls the viewer in. A sharp hand with out-of-focus face creates psychological distance." },
        { h: "The question", p: "Is the soft part soft because I decided it should be, or because I missed?" },
      ],
    },
  },
  "gaze-direction": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Eyes lead", p: "The brain prioritises faces and eyes. When a face appears, the viewer goes there first. Then the eyes direct where they go next." },
        { h: "Key decisions", p: "Looking into the frame — creates tension and narrative. Looking out of the frame — unease or disconnection. Looking directly at camera — confrontational, intimate, breaks the fourth wall." },
        { h: "Space to look into", p: "A subject looking right needs room on the right. Place them against the right edge with nowhere to look and the image feels compressed. Gaze direction connects to negative space — the empty area is where the subject's attention lives." },
        { h: "Genre", p: "Portrait, environmental portrait, documentary, street." },
      ],
    },
  },
  "creative-techniques-intro": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Gear scales with ambition", p: "Most of these techniques require extra gear — some more than others. Start with what you have. A prism costs almost nothing. A macro lens opens an entirely different world. Long exposure needs only a tripod. The investment scales with how deep you want to go." },
      ],
    },
  },
  "prism-creative": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Versatile and underused", p: "One of the most versatile creative tools — and one of the most underused outside portrait photography. Natural home is portraits: prism effects add atmosphere, frame the subject, bring life to flat areas. The technique translates to macro, architecture, street." },
        { h: "More than light effects", p: "Prisms can frame a subject, add colour to a neutral background, or create a second layer of interest without competing with the main subject." },
        { h: "Gear", p: "A single handheld prism works to start. For more control, systems like Omni Filter use magnets to attach different prisms and coloured filters to the lens — switchable mid-shoot." },
        { h: "Reference", p: "Brandon Woelfel has built a contemporary portrait style heavily around prism and light effects — worth studying for how the technique can define a visual identity rather than just add decoration." },
      ],
    },
  },
  "macro-creative": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Range", p: "From simple close-up with a standard macro lens to extreme magnification that reveals structures the naked eye can't resolve. Flowers and insects are the most common entry point; the technique opens up wherever detail and texture matter." },
        { h: "Worth exploring", p: "Moss, lichen, micro fungi — at macro scale they become strange, architectural, almost alien. Water droplets on threads with LED backlighting can be set up on a kitchen table." },
        { h: "Gear", p: "Raynox clip-on adapters — affordable. Dedicated macro lens — standard. Canon MP-E 65mm — 1x to 5x magnification. Macro focusing rail — essential at high magnification. Flash or LED ring light — depth of field gets very thin. In-camera focus stacking — sharp throughout. At extreme magnification, the line between photography and scientific imaging disappears." },
      ],
    },
  },
  "long-exposure-creative": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Time in the image", p: "Long exposure makes time itself part of the image. A tripod is non-negotiable — the camera must be completely still while everything else moves." },
        { h: "Exposure length", p: "1–2 sec: motion blur begins, water softens. 5–6 sec: car light trails. 15–30 sec: water smooth, people disappear or ghost. Several minutes: clouds streak, stars trail. The balance between smooth and structured is a taste decision; test different lengths." },
        { h: "Useful effects", p: "Very long in busy spaces can remove people entirely. Shorter keeps ghost figures — present but transparent. Pro tip: handheld 1/4–1 sec in street — architecture sharp, figures blur; the city becomes inhabited by movement." },
      ],
    },
  },
  "light-painting": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Setup", p: "Dark environment, long exposure, a light source that moves. What you do with that is open." },
        { h: "Tools", p: "Phone torch or small LED to start. Light tubes, LED strips, wands. Neon, LED hoops, light whips. Steel wool spinning — spark trails, visually dramatic. You don't need specialist equipment; a cheap LED and a dark location is enough." },
        { h: "Shutterdrag", p: "Adjacent to light painting: flash freezes the subject, long exposure captures ambient trails or blur. Worth a separate card. Genre: creative, conceptual, fine art — almost no rules." },
      ],
    },
  },
  "icm": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Painterly, not sharp", p: "ICM removes the camera's primary function and replaces it with something closer to painting. The image becomes about colour, light, and movement rather than subject and detail." },
        { h: "Where it works", p: "Forests and tree lines — vertical movement through birch produces brushwork-like images. Water and coastlines — horizontal layered colour. City lights at night. Flower fields — colour abstraction." },
        { h: "Craft and variables", p: "The technique divides photographers; some find it too easy, others build bodies of work around it. Exposure length and movement speed determine everything. Slower movement with shorter exposure retains structure; faster with longer produces pure abstraction. The results are unpredictable — half the point." },
      ],
    },
  },
  "build-reference-bank": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Where inspiration lands", p: "The cards that follow show how to build a reference bank — why you need a system, where to save, and how to turn what you save into plans you actually shoot." },
      ],
    },
  },
  "why-you-need-system": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "The problem", p: "The problem isn't finding inspiration. The problem is losing it. A reference bank doesn't have to be advanced — it has to be consistent. One place, always the same place, with enough structure that you can find things again." },
        { h: "Patterns", p: "The photographers who develop fast are usually the ones who can look back at what they've collected and see patterns they didn't know were there." },
      ],
    },
  },
  "pinterest-boards-planning": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "One board per genre or project", p: "Create one board per genre or project. Save directly from any browser with the Pinterest extension. The search function works well enough to find things again." },
        { h: "Strength", p: "The strength is speed — you see something, you save it in two seconds, it's gone from your feed but not from your collection. Start here if you don't have a system yet." },
      ],
    },
  },
  "folder-structure-dump": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Photo dump first", p: "Create a photo dump folder — one place where everything lands first. Screenshots from Instagram, saves from Pinterest, images from Google. No organisation required in the moment, just capture it." },
        { h: "Sort regularly", p: "Once a week spend five minutes sorting into genre, mood, or project folders. Simple folder structure on your phone or computer beats a complicated system you never use." },
        { h: "Excel", p: "Excel works too — some photographers track shoots, locations, and references in a spreadsheet. It scales surprisingly well." },
      ],
    },
  },
  "notion-planning": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Database you build", p: "Notion is a database you build yourself — tags, categories, links, project pages, gear lists, mood boards, location research, all connected. The learning curve is real but the payoff is a system that grows with your practice." },
        { h: "Connect everything", p: "Connect a reference image to a project, link the project to a location, attach a gear list and a shoot date. Everything in one place." },
        { h: "Pinterest vs Notion", p: "Pinterest shows you what you want to shoot. Notion helps you actually shoot it. Excel gets you part of the way there — Notion gets you further." },
      ],
    },
  },
  "how-to-categorise": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Match how you think", p: "The categories that work are the ones that match how you think — not how a system tells you to think. Some organise by genre, others by mood, light quality, colour palette, or location type." },
        { h: "Useful tags", p: "Genre — portrait, landscape, street, macro. Mood — dark, airy, cinematic, minimal. Technique — prism, long exposure, macro, backlight. Status — reference only / want to recreate / planned shoot." },
        { h: "Goal", p: "The goal isn't a perfect archive. It's a collection you can search when you need direction." },
      ],
    },
  },
  "from-saved-to-scheduled": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Three questions", p: "Once a week or once a month — go through what you've saved. Is this a single shot I can recreate? Is this the start of a project? Does this need planning — location, model, gear, light conditions?" },
        { h: "What moves where", p: "Anything that needs planning moves to a project list. Anything you can shoot tomorrow stays visible. The rest stays in the bank for later." },
        { h: "System beats inspiration", p: "The photographers who shoot consistently aren't more inspired than everyone else. They've built a system that converts inspiration into action before it disappears." },
      ],
    },
  },
  "flickr": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What it is", p: "Flickr is a classic photo-sharing platform where much of the material is organised in groups and can be found via search. A large share is licence-marked (e.g. Creative Commons)." },
        { h: "Why it gives different kinds of references", p: "You find more \"almost-images\", attempts, series and variations. It's gold when you want to understand how a subject can be solved in several ways." },
        { h: "Output", p: "An idea with variation: \"here's how it can look in 10 versions\"." },
      ],
    },
  },
  "500px": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What it is", p: "500px runs both community/portfolio and a licensing side where images can be used commercially via their system." },
        { h: "What to look for", p: "This is the place for \"what does a finished image look like\": consistent tone curve, colours that hold together, subject that is cleanly separated." },
        { h: "Output", p: "A standard for finish you can aim for." },
      ],
    },
  },
  "photocrowd": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What it is", p: "Photocrowd sits between pure gamified challenges and high-end awards — structured competitions with a mix of community voting and expert judging." },
        { h: "Why it is useful", p: "Winning images are consistently strong, and the editorial feel is closer to a curated exhibition than a popularity contest." },
        { h: "Output", p: "A steady stream of practice with real feedback, without the game mechanics taking over." },
      ],
    },
  },
  "gurushots": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What it is", p: "GuruShots is a game — and it is designed to be one. Challenges across dozens of themes, community voting, levels, ranks and global exhibitions." },
        { h: "How to use it", p: "Use it as a motivator: new themes force you to look at the world differently, and the feedback is immediate. Treat it as training for shooting and selection under pressure." },
        { h: "Warning", p: "Community voting rewards safe, pretty, broadly appealing images. Tactics matter as much as photography. Use it to stay active and test what resonates — not to measure your actual level." },
      ],
    },
  },
  "google-bildsok": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Vad det gör i praktiken", p: "Du söker \"ice cave portrait\", \"foggy forest silhouette\", \"leading lines street night\". Du får en vägg av lösningar: vinklar, ljus, färg, rekvisita." },
        { h: "Så används det utan att bli generiskt", p: "Steg 1: hitta standarden (den vanligaste bilden). Steg 2: ändra EN variabel: tid, riktning, avstånd, höjd, brännvidd." },
        { h: "Output", p: "En konkret idé: \"samma motiv, annan lösning\"." },
      ],
    },
  },
  "google-maps": {
    exercise: {
      kind: "text",
      sections: [
        { h: "Uppgift", p: "Sök en plats du vill fotografera. Öppna bilderna. Identifiera: standardvinkeln, standardljuset, standardutsnittet. Formulera en enda ändring som skulle göra bilden din." },
      ],
      reflection: "Maps visar vad som är standard. Då kan du planera att bryta den.",
    },
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Vad det är", p: "Plats + användarbilder + position. Det är pre-scouting." },
        { h: "Hur man använder det", p: "Sök plats. Öppna bilder. Leta efter: var står folk, vilket håll, vilken tid på dygnet." },
        { h: "Output", p: "En plan: \"jag står här, fotar ditåt, vid den tiden\"." },
      ],
    },
  },
  "photopills": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Vad det är", p: "En planeringsapp som visar sol, måne och riktning kopplat till plats och tid." },
        { h: "Varför det spelar roll", p: "Samma plats kan ge två helt olika bilder beroende på ljusets vinkel. Det här är verktyget som gör skillnaden medveten." },
        { h: "Output", p: "\"Rätt minut\" blir ett val, inte tur." },
      ],
    },
  },
  "tpe": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "Vad det är", p: "TPE är ett planeringsverktyg som hjälper dig visualisera sol, måne och naturligt ljus var som helst på jorden, med web-app och appar." },
        { h: "Varför det är praktiskt", p: "Du kan jämföra platser snabbare på desktop och se riktningar direkt. Det gör idéer realistiska tidigt." },
        { h: "Output", p: "Färre chansningar. Fler planerade försök." },
      ],
    },
  },
  "renowned-street-documentary-intro": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) WHAT THIS SECTION IS ABOUT", p: "Street and documentary photography both focus on real life - people, places and moments that happen naturally; the difference is often intention, where street reacts to the moment and documentary tries to understand it. These photographers shaped the visual language of the genre through different ways of seeing reality." },
        { h: "2) WHAT WE CAN LEARN FROM THEM", p: "Their work shows that photography is not only technique, but observation, patience and curiosity practiced over time. Great street and documentary images often come from staying present long enough for something meaningful to happen." },
        { h: "3) DIFFERENT APPROACHES TO STREET & DOCUMENTARY", p: "Some search for the decisive moment, others build layered scenes, and others focus on emotion, portrait-like encounters, or social stories.<br><br>Henri Cartier-Bresson: timing and geometry.<br>Garry Winogrand: energy and unpredictability.<br>Vivian Maier: quiet observation of strangers.<br>Alex Webb: color and layered storytelling.<br>Dorothea Lange: empathy and documentary storytelling.<br><br>Together they show there is no single way to photograph the street - only different ways of seeing it." },
      ],
    },
  },
  "henri-cartier-bresson": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• The decisive moment<br>• Geometric composition in everyday scenes<br>• Capturing ordinary life with perfect timing" },
        { h: "2) What to notice", p: "• Strong lines and shapes guiding the eye<br>• People interacting naturally in the frame<br>• Moments where movement and composition align" },
        { h: "3) What to take with you", p: "• Wait for the moment instead of forcing it<br>• Train your eye to see composition quickly<br>• Timing can turn a simple scene into a great photograph" },
        { h: "4) Photos to check out", p: "• Behind the Gare Saint-Lazare (1932)<br>• Rue Mouffetard, Paris (1954)<br>• Hyères, France (1932)" },
        { h: "5) How he differs", p: "• Extremely precise timing<br>• Clean geometric compositions<br>• More about harmony and structure than chaos" },
        { h: "Photo credit", p: "Portrait of Henri Cartier-Bresson - Paris, 1954<br>Photo by Ihei Kimura<br>Public domain." },
      ],
    },
  },
  "garry-winogrand": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Fast, instinctive street photography<br>• Capturing chaotic everyday life<br>• Shooting constantly to catch unpredictable moments<br>• A raw, energetic view of American streets" },
        { h: "2) What to notice", p: "• Busy scenes with multiple subjects<br>• Frames that feel slightly tilted or off balance<br>• Moments that feel accidental but powerful<br>• Movement and tension inside the frame" },
        { h: "3) What to take with you", p: "• Photograph more than you think you need<br>• Let the scene stay messy and unpredictable<br>• Trust instinct over perfection<br>• The world rarely arranges itself neatly" },
        { h: "4) Photos to check out", p: "• Los Angeles Airport (1964)<br>• Central Park Zoo (1967)<br>• Women Are Beautiful series (1975)<br>• New York street scenes (1960s-70s)" },
        { h: "5) How he differs", p: "• Less controlled than Cartier-Bresson<br>• More chaotic and instinctive composition<br>• Images often feel like fragments of real life<br>• Energy and spontaneity over perfect structure" },
        { h: "Photo credit", p: "Garry Winogrand exhibition, San Francisco Museum of Modern Art (2013)<br>Photo by Frank Schulenburg<br>Licensed under CC BY-SA 3.0." },
      ],
    },
  },
  "vivian-maier": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What she is known for", p: "• Street photography discovered after her death<br>• Observational images of everyday life<br>• Strong use of reflections and shadows" },
        { h: "2) What to notice", p: "• Spontaneous moments in public spaces<br>• Reflections in windows and mirrors<br>• Quiet observation of strangers" },
        { h: "3) What to take with you", p: "• Interesting moments are everywhere<br>• Street photography rewards curiosity<br>• Small gestures can tell big stories" },
        { h: "4) Photos to check out", p: "• Self-portrait reflections<br>• Chicago street scenes (1950-1970s)<br>• Children playing in the streets" },
        { h: "5) How she differs", p: "• Very observational and quiet style<br>• Less structured composition than Cartier-Bresson<br>• Personal and intimate street scenes" },
      ],
    },
  },
  "fan-ho": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Fan Ho's Hong Kong street scenes are built around light beams, smoke, shadow and architecture. People often appear as silhouettes cutting through luminous space." },
        { h: "Structural decision", p: "He positioned himself for light, then waited for a figure to enter it. The environment was pre-designed." },
        { h: "What to extract", p: "Scout light before subject. Use contrast as primary structure. Treat shadow as form, not absence." },
        { h: "Why it matters", p: "When light defines the frame, the subject becomes inevitable." },
      ],
    },
  },
  "alex-webb": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Complex layered street scenes<br>• Strong color photography<br>• Dramatic light and shadow" },
        { h: "2) What to notice", p: "• Multiple subjects in different layers<br>• Bold colors interacting in the frame<br>• Light creating structure in the scene" },
        { h: "3) What to take with you", p: "• Layers create depth and complexity<br>• Light can organize a chaotic scene<br>• Color can become part of composition" },
        { h: "4) Photos to check out", p: "• Istanbul street scenes<br>• Haiti series<br>• Mexico street photography" },
        { h: "5) How he differs", p: "• More complex compositions than most street photographers<br>• Heavy use of color and layers<br>• Images often contain multiple stories at once" },
        { h: "Photo credit", p: "Alex Webb<br>Photo by John Ramspott<br>Licensed under CC BY 2.0" },
      ],
    },
  },
  "dorothea-lange": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What she is known for", p: "• Documentary photography of the Great Depression<br>• Human stories during hardship<br>• Empathetic portraits of ordinary people" },
        { h: "2) What to notice", p: "• Expressions and body language<br>• Simple compositions<br>• Strong emotional presence" },
        { h: "3) What to take with you", p: "• Photography can document history<br>• Simplicity strengthens emotion<br>• Respect for the subject matters" },
        { h: "4) Photos to check out", p: "• Migrant Mother (1936)<br>• White Angel Breadline (1933)<br>• Destitute Pea Pickers (1936)" },
        { h: "5) How she differs", p: "• More documentary than traditional street<br>• Focus on social issues<br>• Images built around human stories" },
      ],
    },
  },
  "ansel-adams": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Monumental black-and-white landscapes<br>• The Zone System<br>• Yosemite and the American West<br>• Precision and tonal control" },
        { h: "2) What to notice", p: "• Dramatic skies and clouds<br>• Deep blacks and bright highlights<br>• Clear structure in foreground and background<br>• Carefully controlled exposure" },
        { h: "3) What to take with you", p: "• Light defines landscape<br>• Contrast builds drama<br>• Technical control expands creative control" },
        { h: "4) How he differs", p: "• Highly technical approach to exposure<br>• Landscapes treated with almost architectural clarity<br>• Focus on tonal precision rather than atmosphere" },
        { h: "5) Photos to check out", p: "• Moonrise, Hernandez, New Mexico<br>• The Tetons and the Snake River<br>• Clearing Winter Storm, Yosemite" },
        { h: "Photo credit", p: "Ansel Adams<br>Photo: J. Malcolm Greany / Public Domain" },
      ],
    },
  },
  "michael-kenna": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Minimalist landscape photography<br>• Long exposures<br>• Quiet, meditative scenes<br>• Black and white simplicity" },
        { h: "2) What to notice", p: "• Very simple compositions<br>• Strong negative space<br>• Mist, water, and sky blending together<br>• Small elements placed carefully in the frame" },
        { h: "3) What to take with you", p: "• Remove what is unnecessary<br>• Simplicity strengthens an image<br>• Atmosphere can replace detail" },
        { h: "4) How he differs", p: "• Minimalism instead of dramatic scenery<br>• Long exposures to simplify landscapes<br>• Small, quiet compositions" },
        { h: "5) Photos to check out", p: "• Ratcliffe Power Station<br>• Hokkaido Trees<br>• Study series" },
        { h: "Photo credit", p: "Michael Kenna<br>Photo: Matteo Colla" },
      ],
    },
  },
  "isabella-tabacchi": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What she is known for", p: "• Atmospheric mountain landscapes<br>• Alpine environments<br>• Mood and color harmony<br>• Contemporary fine-art landscape" },
        { h: "2) What to notice", p: "• Mist and fog shaping the scene<br>• Strong foreground elements<br>• Balanced color palettes<br>• Layers of mountains and light" },
        { h: "3) What to take with you", p: "• Atmosphere adds depth<br>• Foreground builds structure<br>• Timing matters more than location" },
        { h: "4) How she differs", p: "• Mood-driven landscapes<br>• Strong emphasis on atmosphere<br>• Painterly color and light" },
        { h: "5) Photos to check out", p: "• Dolomites mountain scenes<br>• Alpine fog landscapes<br>• Autumn forest valleys" },
      ],
    },
  },
  "edward-burtynsky": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Industrial landscapes<br>• Human impact on the planet<br>• Large-scale aerial perspectives<br>• Environmental storytelling" },
        { h: "2) What to notice", p: "• Huge scale<br>• Repeating patterns<br>• Landscapes shaped by industry<br>• Color used structurally" },
        { h: "3) What to take with you", p: "• Landscape can reveal human activity<br>• Scale changes how we read an image<br>• Patterns can emerge from chaos" },
        { h: "4) How he differs", p: "• Focus on man-made landscapes<br>• Documentary approach to environmental change<br>• Often photographed from the air" },
        { h: "5) Photos to check out", p: "• Nickel Tailings<br>• Shipbreaking, Bangladesh<br>• Oil Fields, California" },
        { h: "Photo credit", p: "Edward Burtynsky<br>Photo: Jon Lebkowsky / Wikimedia Commons / CC BY-SA 2.0" },
      ],
    },
  },
  "charlie-waite": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Classical landscape composition<br>• Elegant visual balance<br>• Careful use of light<br>• Traditional landscape aesthetics" },
        { h: "2) What to notice", p: "• Strong compositional structure<br>• Clear foreground, midground, background<br>• Use of leading lines<br>• Light used to guide the eye" },
        { h: "3) What to take with you", p: "• Composition shapes the image<br>• Balance creates harmony<br>• Light reveals structure" },
        { h: "4) How he differs", p: "• More classical than modern landscape styles<br>• Composition first, drama second<br>• Landscapes built around visual balance" },
        { h: "5) Photos to check out", p: "• Tuscany Cypress Trees<br>• Val d'Orcia landscapes<br>• Lone tree compositions" },
      ],
    },
  },
  "marc-adamus": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Dramatic modern landscape photography<br>• Epic mountain scenery<br>• Intense light and atmosphere<br>• Highly detailed compositions" },
        { h: "2) What to notice", p: "• Powerful skies<br>• Dynamic foreground elements<br>• Strong color contrast<br>• Large depth of field" },
        { h: "3) What to take with you", p: "• Light creates emotion<br>• Foreground adds scale<br>• Weather transforms landscapes" },
        { h: "4) How he differs", p: "• Highly dramatic visual style<br>• Focus on epic locations and conditions<br>• Strong emphasis on atmosphere and impact" },
        { h: "5) Photos to check out", p: "• The Alchemist<br>• Lair of the Mountain King<br>• Forest Cathedral" },
      ],
    },
  },
  "annie-leibovitz": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What she is known for", p: "• Celebrity portrait photography<br>• Narrative editorial portraits<br>• Large, cinematic productions<br>• Iconic magazine covers" },
        { h: "2) What to notice", p: "• Carefully staged scenes<br>• Symbolic environments<br>• Dramatic lighting<br>• Subjects integrated into story" },
        { h: "3) What to take with you", p: "• Portraits can tell stories<br>• Environment can define a person<br>• Scale can increase impact" },
        { h: "4) Photos to check out", p: "• John Lennon and Yoko Ono (Rolling Stone cover)<br>• Demi Moore - Vanity Fair cover<br>• Whoopi Goldberg in Milk Bath" },
        { h: "5) How she differs", p: "• More theatrical than most portrait photographers<br>• Storytelling over minimalism<br>• Production-heavy approach" },
      ],
    },
  },
  "arnold-newman": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Environmental portraiture<br>• Subjects photographed in their workspace<br>• Intelligent composition<br>• Subtle symbolism" },
        { h: "2) What to notice", p: "• Backgrounds that reveal identity<br>• Strong geometric framing<br>• Integration of subject and environment<br>• Quiet visual storytelling" },
        { h: "3) What to take with you", p: "• Environment adds meaning<br>• Composition can explain character<br>• Context strengthens portraits" },
        { h: "4) Photos to check out", p: "• Igor Stravinsky at the Piano<br>• Alfred Krupp portrait" },
        { h: "5) How he differs", p: "• Environment as part of the portrait<br>• Less focus on studio lighting<br>• Intellectual composition" },
        { h: "Photo credit", p: "Arnold Newman — self-portrait, 1981<br>Public Domain" },
      ],
    },
  },
  "helmut-newton": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Provocative fashion photography<br>• Strong, confident female subjects<br>• High contrast lighting<br>• Bold editorial style" },
        { h: "2) What to notice", p: "• Strong body language<br>• Dramatic lighting<br>• Power dynamics<br>• Graphic compositions" },
        { h: "3) What to take with you", p: "• Attitude shapes the image<br>• Lighting creates drama<br>• Confidence reads through posture" },
        { h: "4) Photos to check out", p: "• Big Nudes series<br>• Self-Portrait with Wife and Models<br>• Charlotte Rampling at Hotel Nord-Pinus" },
        { h: "5) How he differs", p: "• More provocative than traditional fashion<br>• Strong narrative tension<br>• Fashion mixed with power themes" },
      ],
    },
  },
  "richard-avedon": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• High-contrast fashion portraits<br>• Clean white backgrounds<br>• Emotional intensity in portraits<br>• Movement in fashion photography" },
        { h: "2) What to notice", p: "• Minimal backgrounds<br>• Strong expressions<br>• Direct eye contact<br>• Subjects slightly off balance" },
        { h: "3) What to take with you", p: "• Simplicity focuses attention<br>• Expression carries the image<br>• A portrait can feel confrontational" },
        { h: "4) Photos to check out", p: "• Dovima with Elephants (1955)<br>• In the American West - Beekeeper<br>• Nastassja Kinski with Python (1981)<br>• Marilyn Monroe (1957 session)" },
        { h: "5) How he differs", p: "• More psychological than traditional fashion<br>• Less glamour, more raw presence<br>• Portraits that feel immediate" },
      ],
    },
  },
  "irving-penn": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Elegant minimalist portraits<br>• Precision and refined composition<br>• Fashion and still life mastery<br>• Quiet, controlled studio work" },
        { h: "2) What to notice", p: "• Simple backdrops<br>• Clean geometry<br>• Subtle body language<br>• Careful lighting" },
        { h: "3) What to take with you", p: "• Simplicity can feel luxurious<br>• Small details create sophistication<br>• Precision creates timeless images" },
        { h: "4) Photos to check out", p: "• Small Trades series<br>• Pablo Picasso portrait<br>• Girl with Tobacco on Tongue<br>• Truman Capote portrait" },
        { h: "5) How he differs", p: "• More restrained than most fashion photographers<br>• Formal elegance over drama<br>• Strong graphic composition" },
      ],
    },
  },
  "yousuf-karsh": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Iconic portraits of world leaders<br>• Dramatic studio lighting<br>• Psychological presence and precision<br>• Famous subjects: Churchill, Einstein, Hemingway, Hepburn" },
        { h: "2) What to notice", p: "• Strong directional light<br>• Sculpted faces with deep shadow<br>• Formal posing<br>• Calm but powerful expressions" },
        { h: "3) What to take with you", p: "• Light shapes character<br>• Small gestures reveal personality<br>• Portraits can define public image<br>• Difference: formal studio control over natural-light spontaneity" },
        { h: "4) Photos to check out", p: "• Winston Churchill portrait<br>• Albert Einstein portrait" },
        { h: "5) How he differs", p: "• Karsh relied on dramatic studio lighting rather than environment.<br>• His portraits feel formal, controlled, and authoritative.<br>• Light is used to sculpt character, not atmosphere." },
        { h: "Photo credit", p: "Yousuf Karsh<br>Photo: Christopher Flach / Wikimedia Commons / CC BY-SA 4.0" },
      ],
    },
  },
  "peter-lindbergh": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Black and white fashion portraits<br>• Natural beauty over heavy styling<br>• The rise of the supermodels (1990s)<br>• Cinematic mood in fashion photography" },
        { h: "2) What to notice", p: "• Minimal retouching<br>• Real expressions over posed glamour<br>• Strong eye contact<br>• Wind, movement, imperfect hair" },
        { h: "3) What to take with you", p: "• Personality beats perfection<br>• Simplicity can be stronger than styling<br>• Black and white removes distraction<br>• Difference: anti-glamour, emotion-first approach" },
        { h: "4) Photos to check out", p: "• British Vogue supermodel cover (1990)<br>• Naomi Campbell early portraits" },
        { h: "5) How he differs", p: "• Lindbergh rejected glossy fashion perfection.<br>• Natural light and raw expression replaced heavy styling.<br>• Fashion portraits that feel human rather than polished." },
        { h: "Photo credit", p: "Peter Lindbergh<br>Photo: Fanzineredwiki / Wikimedia Commons / CC BY-SA 4.0" },
      ],
    },
  },
  "paolo-roversi": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Dreamlike fashion portraits<br>• Soft, painterly lighting<br>• Polaroid large-format work<br>• Timeless editorial style" },
        { h: "2) What to notice", p: "• Soft diffusion<br>• Muted colors<br>• Slow, deliberate posing<br>• Painterly atmosphere" },
        { h: "3) What to take with you", p: "• Mood can outweigh sharpness<br>• Soft light creates intimacy<br>• Imperfection adds poetry" },
        { h: "4) Photos to check out", p: "• Kate Moss Polaroid portraits<br>• Naomi Campbell early portraits" },
        { h: "5) How he differs", p: "• More painterly than most fashion photographers<br>• Slower, quieter visual language<br>• Focus on atmosphere" },
        { h: "Photo credit", p: "Paolo Roversi<br>Photo: Myles Kalus Anak Jihem<br>License: CC BY-SA 4.0<br>Source: Wikimedia Commons" },
      ],
    },
  },
  "gregory-crewdson": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Cinematic staged photography<br>• Large production photo sets<br>• Narrative scenes<br>• Suburban surrealism" },
        { h: "2) What to notice", p: "• Complex lighting setups<br>• Carefully staged environments<br>• Film-like composition<br>• Quiet emotional tension" },
        { h: "3) What to take with you", p: "• A single image can hold a story<br>• Lighting builds atmosphere<br>• Preparation shapes the final image" },
        { h: "4) Photos to check out", p: "• Untitled (Ophelia) - Twilight series<br>• Beneath the Roses series" },
        { h: "5) How he differs", p: "• More like filmmaking than photography<br>• Large production teams<br>• Narrative-driven imagery" },
        { h: "Photo credit", p: "Gregory Crewdson<br>Photo: Christopher Peterson / Wikimedia Commons / CC BY-SA 4.0" },
      ],
    },
  },
  "diane-arbus": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What she is known for", p: "• Intimate portraits of outsiders<br>• Raw documentary style<br>• Direct gaze portraits<br>• Challenging social norms" },
        { h: "2) What to notice", p: "• Eye-level perspective<br>• Honest, unfiltered expressions<br>• Close proximity to subjects<br>• Minimal staging" },
        { h: "3) What to take with you", p: "• Honesty creates impact<br>• Portraits can challenge comfort<br>• Connection matters more than polish" },
        { h: "4) Photos to check out", p: "• Identical Twins, Roselle, New Jersey<br>• Child with Toy Hand Grenade<br>• Jewish Giant at Home with His Parents" },
        { h: "5) How she differs", p: "• Focus on marginalized subjects<br>• Documentary intimacy<br>• Psychological intensity" },
      ],
    },
  },
  "francesca-woodman": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What she is known for", p: "• Conceptual self-portraits<br>• Surreal imagery<br>• Long exposures and motion<br>• Themes of identity and presence" },
        { h: "2) What to notice", p: "• Blurred movement<br>• Fragmented bodies<br>• Use of abandoned spaces<br>• Experimental compositions" },
        { h: "3) What to take with you", p: "• Photography can explore identity<br>• Imperfection can carry meaning<br>• Movement can express emotion" },
        { h: "4) Photos to check out", p: "• House series<br>• Providence self-portraits" },
        { h: "5) How she differs", p: "• Highly conceptual<br>• Personal and introspective<br>• More experimental than traditional portraiture" },
      ],
    },
  },
  "anne-brigman": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Figures placed in rugged landscapes with early pictorialist influence and symbolic intent." },
        { h: "Structural decision", p: "The human form acts as a compositional anchor inside nature." },
        { h: "What to extract", p: "Use scale contrast. Position the body as a clear graphic shape. Think symbolically rather than literally." },
        { h: "Why it matters", p: "Environment becomes narrative when the figure and landscape are designed together." },
      ],
    },
  },
  "sally-mann": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Black and white intimacy, southern landscapes and a raw emotional tone that avoids sentimentality." },
        { h: "Structural decision", p: "Stay close to subject and place; let imperfection remain instead of polishing it away." },
        { h: "What to extract", p: "Photograph what is near. Accept vulnerability. Allow flaws and artifacts to stay in the image." },
        { h: "Why it matters", p: "Honesty has weight that polish cannot imitate." },
      ],
    },
  },
  "saul-leiter": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Muted color, reflections and frames within frames that feel more like atmosphere than statement." },
        { h: "Structural decision", p: "Shoot through layers—glass, rain, signage—to let obstruction become design." },
        { h: "What to extract", p: "Use glass and reflection. Crop boldly. Let color soften hard structural lines." },
        { h: "Why it matters", p: "Color can whisper instead of shout." },
      ],
    },
  },
  "william-eggleston": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Everyday American scenes rendered with saturated color and straightforward framing." },
        { h: "Structural decision", p: "Treat the mundane as worthy of full attention and formal care." },
        { h: "What to extract", p: "Respect simple subjects. Use color contrast deliberately. Compose without relying on obvious drama." },
        { h: "Why it matters", p: "Nothing is too small to carry a picture." },
      ],
    },
  },
  "steve-mccurry": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Powerful portraits in real environments<br>• Strong color photography<br>• Human stories from around the world" },
        { h: "2) What to notice", p: "• Direct eye contact<br>• Rich colors and textures<br>• Subjects framed by their surroundings" },
        { h: "3) What to take with you", p: "• Emotion makes a photo memorable<br>• Color can strengthen storytelling<br>• Faces often carry the entire image" },
        { h: "4) Photos to check out", p: "• Afghan Girl (1984)<br>• Dust Storm, Rajasthan (1983)<br>• Fishermen, Sri Lanka (1995)" },
        { h: "5) How he differs", p: "• More portrait-driven than most street photographers<br>• Strong emphasis on color<br>• Documentary storytelling rather than fleeting moments" },
        { h: "Photo credit", p: "Photographer Steve McCurry<br>Photo by John Ramspott<br>Licensed under Creative Commons Attribution 2.0 (CC BY 2.0)." },
      ],
    },
  },
  "lars-tunbjork": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Saturated color, flash-lit interiors and awkward framing in corporate and suburban spaces." },
        { h: "Structural decision", p: "Flat light reveals absurdity instead of hiding it." },
        { h: "What to extract", p: "Embrace discomfort. Use color boldly. Avoid beautifying what is already strange." },
        { h: "Why it matters", p: "Tone itself can be a critique." },
      ],
    },
  },
  "jake-hicks": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What he is known for", p: "• Modern gel lighting portraits<br>• Colorful studio lighting<br>• Educational photography work<br>• Commercial beauty portraits" },
        { h: "2) What to notice", p: "• Colored gels<br>• Clean studio setups<br>• Controlled lighting ratios<br>• Bold color contrast" },
        { h: "3) What to take with you", p: "• Color can define mood<br>• Lighting design is a creative tool<br>• Studio setups can stay simple" },
        { h: "4) Photos to check out", p: "• Gel portrait lighting work" },
        { h: "5) How he differs", p: "• Strong focus on color lighting<br>• Educational approach to lighting<br>• Modern studio aesthetics" },
      ],
    },
  },
  "wes-anderson": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Centered framing, pastel palettes and repeated geometry that make the frame instantly recognizable." },
        { h: "Structural decision", p: "Perfect alignment and tight palette discipline; almost everything is symmetrical or deliberately balanced." },
        { h: "What to extract", p: "Center deliberately. Limit color range. Repeat shapes to build rhythm." },
        { h: "Why it matters", p: "Consistency over time builds a visual identity." },
      ],
    },
  },
  "stanley-kubrick": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Strong central vanishing points, controlled lighting and measured pacing inside carefully designed spaces." },
        { h: "Structural decision", p: "Use symmetry and depth to create unease rather than comfort." },
        { h: "What to extract", p: "Build depth with lines. Place the subject dead center when you want tension, not neutrality." },
        { h: "Why it matters", p: "Precision in space can disturb as much as it can soothe." },
      ],
    },
  },
  "ridley-scott": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "What defines the work", p: "Haze, backlight and industrial texture that make environments feel physical and heavy." },
        { h: "Structural decision", p: "Light the air as much as the subject; atmosphere is treated as a character." },
        { h: "What to extract", p: "Use practical light sources. Add depth with haze. Emphasize texture in sets and locations." },
        { h: "Why it matters", p: "Atmosphere carries narrative even before characters move." },
      ],
    },
  },
  "renowned-portrait-intro": {
    deepDive: {
      variant: "longform",
      sections: [
        { h: "1) What this section shows", p: "• There is no single way to photograph a face.<br>• Some portraits are built with light. Others with presence, space, or tension.<br>• The differences between these photographers are where the learning is.<br><br>• Karsh sculpted faces with dramatic studio light.<br>• Penn reduced lighting to quiet precision.<br>• Lindbergh used natural light and atmosphere.<br>• Hicks builds portraits through color and gels." },
        { h: "2) How the subject is treated", p: "• Avedon pushed for raw expression.<br>• Arbus photographed people without softening them.<br>• Leibovitz builds entire scenes around a person.<br>• Newman lets the environment explain who the subject is.<br><br>• Some portraits are carefully constructed.<br>• Others rely on waiting for a moment of honesty.<br>• Both approaches can produce powerful images." },
        { h: "3) What to take with you", p: "• Light changes character.<br>• Distance changes emotion.<br>• Background changes meaning.<br>• Expression changes everything.<br><br>Look at each photographer and ask: What did they change - and what stayed simple?" },
      ],
    },
  },
};
