"Utility"

def clear_file(file_name: str):
    """Clear file"""
    open(file_name, 'w').close()
    return