import Technology from '../models/Technology.js';

export const getAllTech = async (req, res) => {
  try {
    const technologies = await Technology.find().sort({ createdAt: -1 });
    res.json(technologies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTechById = async (req, res) => {
  try {
    const tech = await Technology.findById(req.params.id);
    
    if (!tech) {
      return res.status(404).json({ message: 'Technology not found' });
    }
    
    res.json(tech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTechBySlug = async (req, res) => {
  try {
    const tech = await Technology.findOne({ slug: req.params.slug });
    
    if (!tech) {
      return res.status(404).json({ message: 'Technology not found' });
    }
    
    res.json(tech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTech = async (req, res) => {
  try {
    const { title, slug, description, category, icon, color, link } = req.body;

    if (!title || !slug || !description || !category) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const techExists = await Technology.findOne({ slug });
    if (techExists) {
      return res.status(400).json({ message: 'Technology with this slug already exists' });
    }

    const tech = await Technology.create({
      title,
      slug,
      description,
      category,
      icon,
      color,
      link,
    });

    res.status(201).json(tech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTech = async (req, res) => {
  try {
    const tech = await Technology.findById(req.params.id);

    if (!tech) {
      return res.status(404).json({ message: 'Technology not found' });
    }

    const updatedTech = await Technology.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedTech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTech = async (req, res) => {
  try {
    const tech = await Technology.findById(req.params.id);

    if (!tech) {
      return res.status(404).json({ message: 'Technology not found' });
    }

    await Technology.findByIdAndDelete(req.params.id);
    res.json({ message: 'Technology deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
