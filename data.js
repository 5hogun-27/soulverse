// Sample dataset with 50 unique entries
const sampleData = [
    { name: "Albert Einstein", bio: "German-born physicist who developed the theory of relativity.", quote: "Imagination is more important than knowledge." },
    { name: "Maya Angelou", bio: "American poet and civil rights activist.", quote: "You may not control all the events that happen to you, but you can decide not to be reduced by them." },
    { name: "Steve Jobs", bio: "Co-founder of Apple Inc. and pioneer of personal computing.", quote: "Stay hungry, stay foolish." },
    { name: "Nelson Mandela", bio: "South African anti-apartheid revolutionary and first Black president.", quote: "It always seems impossible until it's done." },
    { name: "Marie Curie", bio: "Polish-French physicist and first woman to win a Nobel Prize.", quote: "Nothing in life is to be feared, it is only to be understood." },
    { name: "Mahatma Gandhi", bio: "Indian leader of nonviolent independence movement.", quote: "Be the change that you wish to see in the world." },
    { name: "Ada Lovelace", bio: "English mathematician and first computer programmer.", quote: "Imagination is the discovering faculty, pre-eminently." },
    { name: "Martin Luther King Jr.", bio: "American civil rights leader known for 'I Have a Dream' speech.", quote: "Injustice anywhere is a threat to justice everywhere." },
    { name: "Frida Kahlo", bio: "Mexican painter known for vivid self-portraits.", quote: "I paint my own reality." },
    { name: "Leonardo da Vinci", bio: "Italian polymath of the Renaissance.", quote: "Learning never exhausts the mind." },
    { name: "Malala Yousafzai", bio: "Pakistani education activist and Nobel laureate.", quote: "One child, one teacher, one book, one pen can change the world." },
    { name: "Isaac Newton", bio: "English mathematician who formulated laws of motion.", quote: "If I have seen further, it is by standing on the shoulders of giants." },
    { name: "Rumi", bio: "13th-century Persian poet and Sufi mystic.", quote: "Beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there." },
    { name: "Jane Austen", bio: "English novelist known for her romantic fiction.", quote: "There is no charm equal to tenderness of heart." },
    { name: "Nikola Tesla", bio: "Serbian-American inventor and electrical engineer.", quote: "The present is theirs; the future, for which I really worked, is mine." },
    { name: "Rosa Parks", bio: "American civil rights activist known for Montgomery Bus Boycott.", quote: "You must never be fearful about what you are doing when it is right." },
    { name: "Walt Disney", bio: "American entrepreneur and creator of Mickey Mouse.", quote: "All our dreams can come true, if we have the courage to pursue them." },
    { name: "Amelia Earhart", bio: "American aviator and first woman to fly solo across the Atlantic.", quote: "The most difficult thing is the decision to act, the rest is merely tenacity." },
    { name: "Winston Churchill", bio: "British Prime Minister during World War II.", quote: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
    { name: "Mother Teresa", bio: "Albanian-Indian nun and missionary.", quote: "Spread love everywhere you go." },
    { name: "Elon Musk", bio: "Entrepreneur and CEO of Tesla and SpaceX.", quote: "When something is important enough, you do it even if the odds are not in your favor." },
    { name: "Oprah Winfrey", bio: "American media mogul and philanthropist.", quote: "You become what you believe." },
    { name: "Coco Chanel", bio: "French fashion designer and founder of Chanel.", quote: "In order to be irreplaceable, one must always be different." },
    { name: "Thomas Edison", bio: "American inventor of the light bulb.", quote: "I have not failed. I've just found 10,000 ways that won't work." },
    { name: "Eleanor Roosevelt", bio: "American First Lady and human rights advocate.", quote: "The future belongs to those who believe in the beauty of their dreams." },
    { name: "Pablo Picasso", bio: "Spanish painter and founder of Cubism.", quote: "Every act of creation is first an act of destruction." },
    { name: "Audrey Hepburn", bio: "British actress and humanitarian.", quote: "Nothing is impossible, the word itself says 'I'm possible'!" },
    { name: "Aristotle", bio: "Greek philosopher and polymath.", quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
    { name: "J.K. Rowling", bio: "British author of the Harry Potter series.", quote: "It is our choices that show what we truly are, far more than our abilities." },
    { name: "Albert Camus", bio: "French philosopher and author.", quote: "In the depth of winter, I finally learned that within me there lay an invincible summer." },
    { name: "John Lennon", bio: "English musician and member of The Beatles.", quote: "Life is what happens when you're busy making other plans." },
    { name: "Serena Williams", bio: "American tennis player and multiple Grand Slam champion.", quote: "Every woman's success should be an inspiration to another." },
    { name: "Mark Twain", bio: "American writer and humorist.", quote: "The secret of getting ahead is getting started." },
    { name: "Cleopatra", bio: "Queen of Egypt known for her political acumen.", quote: "I will not be triumphed over." },
    { name: "Steve Wozniak", bio: "Co-founder of Apple Inc. and computer engineer.", quote: "Never trust a computer you can't throw out a window." },
    { name: "Harriet Tubman", bio: "American abolitionist and Underground Railroad conductor.", quote: "Every great dream begins with a dreamer." },
    { name: "Socrates", bio: "Greek philosopher and founder of Western philosophy.", quote: "I know that I know nothing." },
    { name: "Virginia Woolf", bio: "English writer and modernist.", quote: "A woman must have money and a room of her own if she is to write fiction." },
    { name: "Neil Armstrong", bio: "American astronaut and first man on the moon.", quote: "That's one small step for man, one giant leap for mankind." },
    { name: "Simone de Beauvoir", bio: "French philosopher and feminist.", quote: "One is not born, but rather becomes, a woman." },
    { name: "Buddha", bio: "Founder of Buddhism and spiritual teacher.", quote: "The mind is everything. What you think you become." },
    { name: "Ellen DeGeneres", bio: "American comedian and TV host.", quote: "Follow your passion. Stay true to yourself." },
    { name: "George Washington", bio: "First President of the United States.", quote: "It is better to offer no excuse than a bad one." },
    { name: "Marilyn Monroe", bio: "American actress and cultural icon.", quote: "We are all of us stars, and we deserve to twinkle." },
    { name: "Vincent van Gogh", bio: "Dutch painter known for his expressive art.", quote: "I dream my painting and I paint my dream." },
    { name: "Beyoncé", bio: "American singer and cultural icon.", quote: "Power is not given to you. You have to take it." },
    { name: "Plato", bio: "Greek philosopher and student of Socrates.", quote: "We are twice armed if we fight with faith." },
    { name: "Angela Merkel", bio: "Former German Chancellor and scientist.", quote: "You can do a lot if you're willing to take responsibility." },
    { name: "Freddie Mercury", bio: "British singer and lead vocalist of Queen.", quote: "I won't be a rock star. I will be a legend." },
    { name: "Susan B. Anthony", bio: "American suffragist and women's rights activist.", quote: "Organize, agitate, educate must be our war cry." }
];

// Generate 500 entries by duplicating and modifying sample data
const data = [];
for (let i = 0; i < 500; i++) {
    const sample = sampleData[i % sampleData.length];
    data.push({
        name: `${sample.name}${i < sampleData.length ? '' : ' ' + (i + 1)}`,
        bio: sample.bio,
        quote: sample.quote
    });
}