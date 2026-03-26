import { NextRequest, NextResponse } from 'next/server';

// Mock safety knowledge base for chatbot responses
const safetyKnowledge: Record<string, string> = {
  'ppe': 'Personal Protective Equipment (PPE) is essential on all construction sites. Required items include hard hats, safety glasses, gloves, steel-toed boots, and high-visibility clothing. Always inspect PPE before use and replace damaged equipment immediately.',
  
  'fall prevention': 'Fall prevention is critical in construction. Always use fall protection systems when working at heights above 6 feet. Options include guardrails, safety nets, personal fall arrest systems, and warning lines. Ensure all equipment is OSHA-approved.',
  
  'electrical safety': 'Electrical hazards on construction sites can be fatal. Never touch exposed wires, use GFCI-protected outlets, and maintain proper distance from power lines (minimum 10 feet). Always use grounded tools and qualified electricians for electrical work.',
  
  'crane operations': 'Crane safety requires proper training and certification. Always perform pre-operation inspections, use qualified operators, maintain proper load limits, and ensure clear communication with ground personnel. Never exceed manufacturer load ratings.',
  
  'hazard recognition': 'Common construction hazards include falls, electrocution, being struck by objects, and caught-in/between hazards. Regular site inspections and hazard assessments help identify risks before incidents occur. Report all hazards immediately.',
  
  'incident response': 'In case of an incident: 1) Ensure immediate safety of personnel, 2) Call emergency services if needed, 3) Secure the incident area, 4) Document the incident, 5) Report to site supervisor, 6) Cooperate with investigation.',
  
  'machinery': 'Heavy machinery must be operated by certified personnel only. Always lockout/tagout before maintenance, keep guards in place, and use spotters for blind areas. Never operate equipment under the influence of drugs or alcohol.',
  
  'working at heights': 'Working at heights requires fall protection systems, proper training, and risk assessment. Use engineered anchor points, certified harnesses, and rescue plans. Avoid working in adverse weather conditions.',
};

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Check for keyword matches in the safety knowledge base
  for (const [keyword, response] of Object.entries(safetyKnowledge)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }
  
  // Handle general questions
  if (lowerMessage.includes('module') || lowerMessage.includes('course')) {
    return 'Our safety training modules are organized into three levels: Beginner, Intermediate, and Advanced. Each module focuses on specific construction safety competencies. Start with Beginner modules if you\'re new to construction, or choose modules based on your job role and experience level.';
  }
  
  if (lowerMessage.includes('certification')) {
    return 'Upon completing a module with a passing score, you\'ll receive a professional certification report indicating your competency in that safety area. Certifications are valid for 2 years and can qualify you for specific on-site roles. Higher-level certifications require prerequisite modules.';
  }
  
  if (lowerMessage.includes('how long') || lowerMessage.includes('duration')) {
    return 'Module durations vary by level and complexity. Beginner modules typically take 25-30 minutes, Intermediate modules 35-45 minutes, and Advanced modules 40-50 minutes. You can pause and resume modules at any time.';
  }
  
  if (lowerMessage.includes('requirement') || lowerMessage.includes('prerequisite')) {
    return 'Some modules have prerequisites - you\'ll need to complete foundational training before advancing. This ensures you have essential knowledge before tackling complex scenarios. Check each module\'s requirements on the course page.';
  }
  
  if (lowerMessage.includes('score') || lowerMessage.includes('passing')) {
    return 'Passing scores vary by module level: Beginner modules require 70%, Intermediate 75%, and Advanced 80%. Your performance in the simulation is evaluated based on hazard recognition, proper procedure execution, and decision-making speed.';
  }
  
  if (lowerMessage.includes('help') || lowerMessage.includes('question')) {
    return 'I\'m here to help! You can ask me about specific safety topics (PPE, electrical safety, fall prevention, crane operations, etc.), module requirements, certification details, or general construction safety procedures. What would you like to know?';
  }
  
  // Default helpful response
  return 'That\'s a great question about construction safety! For specific information, I can help with safety procedures, module details, or industry standards. Please feel free to ask about any safety topic or aspect of our training program.';
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Generate response based on message
    const response = generateResponse(message);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
